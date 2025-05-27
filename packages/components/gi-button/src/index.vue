<template>
  <el-button v-bind="btnProps">
    <slot>{{ btnText }}</slot>
  </el-button>
</template>

<script setup lang="ts">
import type { btnProps } from 'element-plus'
import { Delete, Edit, Plus, Search } from '@element-plus/icons-vue'
import { computed, useAttrs } from 'vue'

interface Props {
  type?: 'add' | 'edit' | 'delete' | 'search' | ''
}

const props = withDefaults(defineProps<Props>(), {
  type: ''
})

const attrs = useAttrs()

const obj = {
  add: { btnProps: { icon: Plus, type: 'primary' }, btnText: '新增' },
  edit: { btnProps: { icon: Edit, type: 'primary' }, btnText: '编辑' },
  delete: { btnProps: { icon: Delete, type: 'danger' }, btnText: '删除' },
  search: { btnProps: { icon: Search, type: 'primary' }, btnText: '搜索' }
}

const btnProps = computed(() => {
  return { ...attrs, ...(obj?.[props.type]?.btnProps || { type: props.type }) }
})
const btnText = computed(() => {
  return obj[props.type].btnText
})
</script>

<style lang="scss" scoped>
.button {
  background-color: pink;
  padding: 10px;
}
</style>
