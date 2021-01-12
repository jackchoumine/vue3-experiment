<template>
  <div>
    <a-button @click="isOpen = true">打开</a-button>
    <Teleport to=".modal">
      <div v-if="isOpen" class="modal">
        <h2>Teleport组件</h2>
        <div>body</div>
        <p>modal footer</p>
        <a-button @click="isOpen = false">关闭</a-button>
      </div>
    </Teleport>
  </div>
</template>
<script>
import { defineComponent, ref, reactive, watch, computed } from 'vue'
export default defineComponent({
  name: 'TeleportVue',
  components: {},
  setup(props, { emit, attrs, slots }) {
    const isOpen = ref(false)
    return { isOpen }
  },
})
</script>
<style scoped lang="css">
.modal {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 999;
  background-color: gray;
}
</style>
