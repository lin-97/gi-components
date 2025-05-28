<template>
  <div class="gi-page-layout" :class="{ 'gi-page-layout--bordered': props.bordered }">
    <div v-if="slots.left" class="gi-page-layout__left" :style="props.leftStyle">
      <slot name="left"></slot>
    </div>
    <section class="gi-page-layout__right">
      <section v-if="slots.header" class="gi-page-layout__header" :style="props.headerStyle">
        <slot name="header"></slot>
      </section>
      <section v-if="slots.tool" class="gi-page-layout__tool" :style="props.toolStyle">
        <slot name="tool"></slot>
      </section>
      <div class="gi-page-layout__body" :style="props.bodyStyle">
        <slot></slot>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import type { PageLayoutProps } from './type'
import { useSlots } from 'vue'

defineOptions({ name: 'PageLayout' })

const props = withDefaults(defineProps<PageLayoutProps>(), {
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
    height: auto;
    width: 260px;
    border-right: 1px solid var(--el-border-color);
  }

  &__right {
    flex: 1;
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
</style>
