<template>
  <el-splitter :class="getClass">
    <el-splitter-panel v-if="slots.left" :size="props.size">
      <div :class="b('page-layout__left')" :style="props.leftStyle">
        <slot name="left"></slot>
      </div>
    </el-splitter-panel>
    <el-splitter-panel>
      <div :class="b('page-layout__right')">
        <div v-if="slots.header" :class="b('page-layout__header')" :style="props.headerStyle">
          <slot name="header"></slot>
        </div>
        <div v-if="slots.tool" :class="b('page-layout__tool')" :style="props.toolStyle">
          <slot name="tool"></slot>
        </div>
        <div :class="b('page-layout__body')" :style="props.bodyStyle">
          <slot></slot>
        </div>
      </div>
    </el-splitter-panel>
  </el-splitter>
</template>

<script lang="ts" setup>
import type { PageLayoutProps } from './type'
import { computed, useSlots } from 'vue'
import { useBemClass } from '../../../hooks'

const props = withDefaults(defineProps<PageLayoutProps>(), {
  size: 270,
  bordered: false,
  leftStyle: () => ({}),
  headerStyle: () => ({}),
  toolStyle: () => ({}),
  bodyStyle: () => ({})
})

defineSlots<{
  header: () => void
  left: () => void
  tool: () => void
  default: () => void
}>()

const slots = useSlots()
const { b } = useBemClass()

const getClass = computed(() => {
  const arr: string[] = [b('page-layout')]
  if (props.bordered) {
    arr.push(b('page-layout--bordered'))
  }
  if (slots.header) {
    arr.push(b('page-layout--has-header'))
  }
  if (slots.tool) {
    arr.push(b('page-layout--has-tool'))
  }
  return arr.join(' ')
})
</script>

<style lang="scss" scoped>
@use '../../../styles/var.scss' as a;

.#{a.$prefix}-page-layout {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  background-color: var(--el-bg-color);
  --page-layout-padding: 14px;

  &--bordered {
    border: 1px solid var(--el-border-color);
  }

  &__left {
    width: 100%;
    height: 100%;
  }

  &__right {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
}

.#{a.$prefix}-page-layout__header {
  padding: var(--page-layout-padding);
  padding-bottom: 0;
  border-bottom: 1px solid var(--el-border-color);
  box-sizing: border-box;
}

.#{a.$prefix}-page-layout__tool {
  width: 100%;
  padding: var(--page-layout-padding);
  padding-bottom: 0;
  display: flex;
  justify-content: end;
  align-items: center;
  box-sizing: border-box;
}

.#{a.$prefix}-page-layout__body {
  flex: 1;
  padding: var(--page-layout-padding);
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
}

.#{a.$prefix}-page-layout--has-header {
  .#{a.$prefix}-page-layout__tool {
    padding-top: 10px;
  }
}

.#{a.$prefix}-page-layout--has-header,
.#{a.$prefix}-page-layout--has-tool {
  .#{a.$prefix}-page-layout__body {
    padding-top: 10px;
  }
}
</style>
