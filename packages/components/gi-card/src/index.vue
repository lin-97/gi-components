<template>
  <div class="gi-card" :class="{ 'gi-card--bordered': props.bordered }">
    <div class="gi-card-header" :class="getHeaderClass" :style="props.headerStyle">
      <div class="gi-card-header__title">
        <slot name="title">{{ props.title }}</slot>
      </div>
      <div class="gi-card-header__extra">
        <slot name="extra">{{ props.extra }}</slot>
      </div>
    </div>
    <div class="gi-card-body" :style="props.bodyStyle">
      <slot></slot>
    </div>
    <div v-if="slot.footer" class="gi-card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { CardProps } from './type'
import { computed, useSlots } from 'vue'

defineOptions({ name: 'GiCard' })

const props = withDefaults(defineProps<CardProps>(), {
  title: '',
  extra: '',
  bordered: false,
  headerBordered: true,
  headerStyle: () => ({}),
  bodyStyle: () => ({})
})

defineSlots<{
  default: () => void
  title: () => void
  extra: () => void
  footer: () => void
}>()

const slot = useSlots()

const getHeaderClass = computed(() => {
  return {
    'gi-card-header--bordered': props.headerBordered
  }
})
</script>

<style lang="scss" scoped>
.gi-card {
  background-color: var(--el-bg-color);
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
  --gi-card-padding: 14px;

  &--bordered {
    border: 1px solid var(--el-border-color);
  }
}

.gi-card-header {
  height: 46px;
  padding: 0 var(--gi-card-padding);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--el-text-color-primary);
  font-size: 16px;
  box-sizing: border-box;

  &__title {
    position: relative;
    line-height: 1.3em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    box-sizing: border-box;
  }

  &--bordered {
    border-bottom: 1px solid var(--el-border-color);
  }
}

.gi-card-body {
  flex: 1;
  padding: var(--gi-card-padding);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.gi-card-footer {
  padding: 0 var(--gi-card-padding);
  box-sizing: border-box;
}
</style>
