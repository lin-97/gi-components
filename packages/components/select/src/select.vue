<template>
  <el-select v-bind="bindProps">
    <el-option v-for="item in props.options" :key="item.value" v-bind="item"> </el-option>
  </el-select>
</template>

<script lang="ts" setup>
import type { SelectProps } from './type'
import { computed, useAttrs } from 'vue'

const props = withDefaults(defineProps<SelectProps>(), {
  options: () => []
})

const attrs = useAttrs()

const bindProps = computed(() => {
  return {
    ...attrs,
    ...props,
    options: undefined
  }
})
</script>

<style lang="scss" scoped></style>
