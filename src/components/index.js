/*
 * @Description: 注册全局组件
 * @Date: 2021-01-09 21:06:09 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-01-12 21:15:45 +0800
 * @LastEditors: JackChou
 */
import WatchTest from './WatchTest.vue'
import WatchEffect from './WatchEffect.vue'
import SetupOne from './SetupOne.vue'
import SetupTwo from './SetupTwo.vue'
const components = [WatchTest, WatchEffect, SetupOne, SetupTwo]
export const registerComponents = (app) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
export default components
