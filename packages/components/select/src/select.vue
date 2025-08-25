<template>
  <el-select :class="b('select')" v-bind="bindProps">
    <el-option v-for="item in props.options" :key="item.value" v-bind="item"> </el-option>
  </el-select>
</template>

<script lang="ts" setup>
import type { SelectProps } from './type'
import { computed, useAttrs } from 'vue'
import { useBemClass } from '../../../hooks'

const props = withDefaults(defineProps<SelectProps>(), {
  options: () => []
})

const attrs = useAttrs()
const { b } = useBemClass()

const bindProps = computed(() => {
  return {
    ...attrs,
    ...props,
    options: undefined
  }
})
</script>

<style lang="scss" scoped></style>
