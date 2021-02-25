<template>
  <div>
    <i class="el-icon-edit"></i>
    <el-tree
      :data="treeData"
      show-checkbox
      default-expand-all
      node-key="id"
      ref="tree"
      highlight-current
      :props="defaultProps"
    >
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span>
            {{ node.label }}
            <!-- <span class="icon"> -->
            <i class="el-icon-setting"></i>
            <!-- </span> -->
          </span>
          <span>
            <!-- <span>{{ data }}</span> -->
            <!-- <a @click="append(data)">Append</a> -->
            <!-- <a @click="remove(node, data)">Delete</a> -->
          </span>
        </span>
      </template>
    </el-tree>
  </div>
</template>
<script>
import { ref, reactive, watch, computed } from 'vue'
const data = [
  {
    id: 1,
    label: '一级 1',
    type: 'menu',
    children: [
      {
        id: 4,
        label: '二级 1-1',
        type: 'page',
        children: [
          {
            id: 9,
            label: '三级 1-1-1',
            type: 'button',
          },
          {
            id: 10,
            label: '三级 1-1-2',
          },
        ],
      },
    ],
  },
]
export default {
  name: 'Tree',
  components: {},
  setup(props, { emit, attrs, slots }) {
    const treeData = reactive(data)
    return { treeData }
  },
}
</script>
<style scoped lang="scss">
</style>
