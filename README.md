# vue-next-webpack-preview

> Minimal webpack setup for Vue 3 (RC)

This is for preview purposes. There might be bugs and undocumented behavior differences from v2, which are expected.

If you are using VSCode, Vetur isn't updated to take advantage of Vue 3's typing yet so intellisense in Vue files may not be fully functional (especially in templates).

Also note that this is for configuration reference only. For real-world projects, it's recommended to use [`vite`](https://github.com/vitejs/vite) or [`@vue/cli`](https://github.com/vuejs/vue-cli).

### Prerequisites

- Node & NPM

### Install

```sh
npm install
```

### Usage

##### Develop

```sh
# run dev server at localhost:8080
npm run dev
```

##### Build

```sh
# transpile js for deployment
npm run build
```

## setup

`setup` 函数是一个新的组件选项，是组件的入口。

```ts
interface Data {
	[key: string]: unknown
}

interface SetupContext {
	attrs: Data
	slots: Slots
	emit: (event: string, ...args: unknown[]) => void
}

function setup(props: Data, context: SetupContext): Data
```

> 参数：

1. 第一个参数 props，是响应式的，`不要解构，否则失去响应式`。

2. 第二个参数是上下文对象，暴露了`attrs`、`slots`、`emit` 属性，可通过解构获取。attrs 和 slots 都是内部组件实例上对应项的代理，可以确保在更新后仍然是最新值。

> 返回值

返回一个对象，该对象中包含在模板中使用的`数据`、`事件处理函数`。

返回函数，该函数返回一个渲染函数，在渲染函数中可是响应式数据。

**返回的响应式数据在模板中自动解开，需要`.value`**

> 关于 this，setup 中为 undefined。

> 调用时机

props 初始化后立即调用，先于`beforeCreate`调用。

在模板中使用 setup

```html
<template>
	<div class="setup-one">
		<h1>setup</h1>
		<p>分数：{{ count }}</p>
		<div>年纪：{{ age }}</div>
		<a-button @click="onChangeAge">修改年纪</a-button>
	</div>
</template>
<script>
	import { computed, defineComponent, ref } from 'vue'
	export default defineComponent({
		name: 'SetupOne',
		props: {
			mark: Number,
		},
		setup(props) {
			const age = ref(0)
			const count = computed(() => props.mark * 0.5)
			function onChangeAge() {
				console.log(this) //NOTE setup 中的this 是 undefined
				age.value = Math.random() * 50 // ref 的数据使用 .value 访问
			}
			return { age, onChangeAge, count }
		},
	})
</script>
<style scoped lang="scss"></style>
```

使用渲染函数

```html
<script>
	import { defineComponent, ref, h } from 'vue'
	export default defineComponent({
		name: 'SetupTwo',
		props: {
			mark: Number,
		},
		setup(props) {
			const count = ref(0)
			return () => h('div', [count.value, '--', h('span', [props.mark])])
		},
	})
</script>
<style scoped lang="scss"></style>
```

> 还不知道如何配置 JSX 的支持。

## watch

vue3 中提供了 watch 函数，用于监听响应式数据。

```js
import { defineComponent, ref, watch } from 'vue'
export default defineComponent({
	name: 'WatchTest',
	setup(props, { emit, attrs, slots }) {
		const count = ref(0)
		const unWatch = watch(count, (value, oldValue) => {
			if (value === 6) {
				unWatch()
				console.log(timer)
				clearInterval(timer)
			}
			console.log(value, oldValue)
		})
		const timer = setInterval(() => {
			count.value += 2
			if (count.value === 10) {
				unWatch()
			}
		}, 2000)
		return { count }
	},
})
```
