<template>
  <div>
    <a-input type="text" @change="onChange" v-model:value="input"></a-input>
    <ul>
      <!-- <li v-for="item in "></li> -->
    </ul>
  </div>
</template>
<script>
import { ref, toRaw, reactive, watch, computed } from 'vue'
export default {
  name: 'SearchCom',
  components: {},
  setup(props, { emit, attrs, slots }) {
    const originNames = [
      { id: 1, isFixSearch: true, value: 'name1' },
      { id: 2, isFixSearch: true, value: 'name2' },
      { id: 3, isFixSearch: true, value: 'name3' },
      { id: 4, isFixSearch: true, value: 'name4' },
      { id: 5, isFixSearch: true, value: 'name5' },
    ]
    const input = ref('')
    const onChange = value => {
      console.log(toRaw(input))
      console.log(input.value)
      console.log(toRaw(input.value))
    }
    return { input, onChange }
  },
}
</script>
<style scoped lang="scss">
</style>
