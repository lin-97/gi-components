<template>
  <el-radio-group v-bind="bindProps">
    <el-radio v-for="item in props.options" :key="item.value" v-bind="item">
      {{ item.label }}
    </el-radio>
  </el-radio-group>
</template>

<script lang="ts" setup>
import type { RadioGroupProps } from './type'
import { computed, useAttrs } from 'vue'

const props = withDefaults(defineProps<RadioGroupProps>(), {
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
