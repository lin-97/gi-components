<template>
  <el-button v-bind="bindProps">
    <slot>{{ btnText }}</slot>
  </el-button>
</template>

<script setup lang="ts">
import type { ButtonProps } from './type.ts'
import { Delete, Download, Edit, Plus, Search, Upload } from '@element-plus/icons-vue'
import { computed, useAttrs } from 'vue'

const props = withDefaults(defineProps<ButtonProps>(), {
  type: ''
})

const attrs = useAttrs()

const obj: Record<string, { btnProps: Partial<ButtonProps>, btnText: string }> = {
  add: { btnProps: { icon: Plus, type: 'primary' }, btnText: '新增' },
  edit: { btnProps: { icon: Edit, type: 'primary' }, btnText: '编辑' },
  delete: { btnProps: { icon: Delete, type: 'danger' }, btnText: '删除' },
  search: { btnProps: { icon: Search, type: 'primary' }, btnText: '搜索' },
  upload: { btnProps: { icon: Upload, type: 'primary' }, btnText: '上传' },
  download: { btnProps: { icon: Download, type: 'primary' }, btnText: '下载' }
}

const bindProps = computed(() => {
  return { ...attrs, ...(obj?.[props.type]?.btnProps || { type: props.type }) }
})

const btnText = computed(() => {
  return obj[props.type].btnText
})
</script>

<style lang="scss" scoped></style>
