/*
 * @Description: 入口文件
 * @Date: 2020-12-22 21:05:26 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-01-14 20:46:01 +0800
 * @LastEditors: JackChou
 */
import { createApp } from 'vue'
import App from './App.vue'
import { registerComponents } from './components'
// 接受一个组件或者组件定义对象作为参数，返回一个组件的实例
const vue = createApp(App)
// registerComponents(vue)
vue.use(registerComponents, app)
// 使用这个组件库
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
vue.use(Antd)
vue.mount('#app')
