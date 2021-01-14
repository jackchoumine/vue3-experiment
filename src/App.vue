<!--
 * @Description: 
 * @Date: 2020-12-22 21:05:26 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-01-14 15:23:34 +0800
 * @LastEditors: JackChou
-->
<template>
  <h1>vue3 学习</h1>
  <!-- <WatchTest /> -->
  <!-- <WatchEffect /> -->
  <SetupOne :mark="mark"></SetupOne>
  <SetupTwo :mark="mark"></SetupTwo>
  <!-- <TeleportVue /> -->
  <Suspense />
  <ul>
    <FragmentTest :data="[5, 3, 1, 6, 9, 4, 2, 8]" />
  </ul>

  <a-button @click="onChangeMark">修改mark</a-button>
  <MyInput
    :size="20"
    :disabled="false"
    v-model:value="inputValue"
    @input="onInputValue"
    class="test"
    style="color: red"
  />
  <p>
    输入的值
    <span style="color: red">
      {{ inputValue }}
    </span>
  </p>
  <h2>自定义事件--- emits</h2>
  <MyButton @click="onClick" />
</template>

<script>
import { ref, onErrorCaptured } from 'vue'

function useInput() {
  const inputValue = ref('输入值')
  const onInputValue = event => {
    inputValue.value = event.target.value
  }
  return { onInputValue, inputValue }
}
export default {
  name: 'App',
  setup() {
    const mark = ref(100)
    function onChangeMark() {
      console.log('点击事件触发')
      mark.value = 200 * Math.random()
    }

    onErrorCaptured((error, vm, info) => {
      console.log('error')
      console.log(error)
      console.log('vm')
      console.log(vm)
      console.log('inofo')
      console.log(info)
      return false
    })
    const { inputValue, onInputValue } = useInput()
    const onClick = params => {
      if (params.target && 'DIV' === params.target.tagName) {
        console.log('根元素触发的事件')
      } else {
        console.log('自定义事件抛出的数据:')
        console.log(params)
      }
    }
    return { onChangeMark, mark, inputValue, onInputValue, onClick }
  },
}
</script>

<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
