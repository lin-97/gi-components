<template>
  <div class="gi-card" :class="getCardClass">
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

const props = withDefaults(defineProps<CardProps>(), {
  title: '',
  extra: '',
  size: 'middle' as const,
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

const getCardClass = computed(() => {
  const arr: string[] = []
  if (props.bordered) {
    arr.push('gi-card--bordered')
  }
  arr.push(`gi-card--${props.size}`)
  return arr.join(' ')
})

const getHeaderClass = computed(() => {
  return {
    'gi-card-header--bordered': props.headerBordered
  }
})
</script>

<style lang="scss" scoped>
.gi-card {
  background-color: var(--el-bg-color);
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

  &__extra {
    display: flex;
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
  padding: 8px var(--gi-card-padding);
  box-sizing: border-box;
  border-top: 1px solid var(--el-border-color);
  box-sizing: border-box;
}

.gi-card--small {
  .gi-card-header {
    font-size: 14px;
    height: 36px;
    padding: 0 10px;
  }

  .gi-card-body {
    padding: 10px;
  }

  .gi-card-footer {
    --gi-card-padding: 10px;
    padding: 6px var(--gi-card-padding);
  }
}
</style>
