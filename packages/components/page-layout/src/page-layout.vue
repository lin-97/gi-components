<template>
  <el-splitter class="gi-page-layout" :class="getClass">
    <el-splitter-panel v-if="slots.left" :size="props.size">
      <div class="gi-page-layout__left" :style="props.leftStyle">
        <slot name="left"></slot>
      </div>
    </el-splitter-panel>
    <el-splitter-panel>
      <div class="gi-page-layout__right">
        <div v-if="slots.header" class="gi-page-layout__header" :style="props.headerStyle">
          <slot name="header"></slot>
        </div>
        <div v-if="slots.tool" class="gi-page-layout__tool" :style="props.toolStyle">
          <slot name="tool"></slot>
        </div>
        <div class="gi-page-layout__body" :style="props.bodyStyle">
          <slot></slot>
        </div>
      </div>
    </el-splitter-panel>
  </el-splitter>
</template>

<script lang="ts" setup>
import type { PageLayoutProps } from './type'
import { computed, useSlots } from 'vue'

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

const getClass = computed(() => {
  const arr: string[] = []
  if (props.bordered) {
    arr.push('gi-page-layout--bordered')
  }
  if (slots.header) {
    arr.push('gi-page-layout--has-header')
  }
  if (slots.tool) {
    arr.push('gi-page-layout--has-tool')
  }
  return arr.join(' ')
})
</script>

<style lang="scss" scoped>
.gi-page-layout {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  background-color: var(--el-bg-color);
  --gi-page-layout-padding: 14px;

  &--bordered {
    border: 1px solid var(--el-border-color);
  }

  &__left {
    height: 100%;
    width: 260px;
    border-right: 1px solid var(--el-border-color);
  }

  &__right {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
}

.gi-page-layout__header {
  padding: var(--gi-page-layout-padding);
  padding-bottom: 0;
  border-bottom: 1px solid var(--el-border-color);
  box-sizing: border-box;
}

.gi-page-layout__tool {
  width: 100%;
  padding: var(--gi-page-layout-padding);
  padding-bottom: 0;
  display: flex;
  justify-content: end;
  align-items: center;
  box-sizing: border-box;
}

.gi-page-layout__body {
  flex: 1;
  padding: var(--gi-page-layout-padding);
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
}

.gi-page-layout--has-header,
.gi-page-layout--has-tool {
  .gi-page-layout__body {
    padding-top: 10px;
  }
}
</style>
