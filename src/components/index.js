/*
 * @Description: 注册全局组件
 * @Date: 2021-01-09 21:06:09 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-01-12 21:43:33 +0800
 * @LastEditors: JackChou
 */
import WatchTest from './WatchTest.vue'
import WatchEffect from './WatchEffect.vue'
import SetupOne from './SetupOne.vue'
import SetupTwo from './SetupTwo.vue'
import TeleportVue from './TeleportVue.vue'
const components = [WatchTest, WatchEffect, TeleportVue, SetupOne, SetupTwo]
export const registerComponents = (app) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
export default components
