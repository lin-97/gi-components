<template>
  <el-checkbox-group v-bind="bindProps">
    <el-checkbox v-for="item in props.options" :key="item.value" v-bind="item">
      {{ item.label }}
    </el-checkbox>
  </el-checkbox-group>
</template>

<script lang="ts" setup>
import type { CheckboxGroupProps } from './type'
import { computed, useAttrs } from 'vue'

defineOptions({ name: 'GiCheckboxGroup' })

const props = withDefaults(defineProps<CheckboxGroupProps>(), {
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
