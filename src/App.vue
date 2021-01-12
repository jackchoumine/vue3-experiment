<!--
 * @Description: 
 * @Date: 2020-12-22 21:05:26 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-01-12 21:43:43 +0800
 * @LastEditors: JackChou
-->
<template>
  <h1>vue3 学习</h1>
  <!-- <WatchTest /> -->
  <!-- <WatchEffect /> -->
  <SetupOne :mark="mark"></SetupOne>
  <SetupTwo :mark="mark"></SetupTwo>
  <TeleportVue />
  <a-button @click="onChangeMark">修改mark</a-button>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'App',
  setup() {
    const mark = ref(100)
    function onChangeMark() {
      mark.value = 200 * Math.random()
    }
    return { onChangeMark, mark }
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
