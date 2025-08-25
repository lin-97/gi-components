<template>
  <div :class="getCardClass">
    <div :class="getHeaderClass" :style="props.headerStyle">
      <div :class="b('card-header__title')">
        <slot name="title">{{ props.title }}</slot>
      </div>
      <div :class="b('card-header__extra')">
        <slot name="extra">{{ props.extra }}</slot>
      </div>
    </div>
    <div :class="b('card-body')" :style="props.bodyStyle">
      <slot></slot>
    </div>
    <div v-if="slot.footer" :class="b('card-footer')">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { CardProps } from './type'
import { computed, useSlots } from 'vue'
import { useBemClass } from '../../../hooks'

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
const { b } = useBemClass()

const getCardClass = computed(() => {
  const arr: string[] = [b('card')]
  if (props.bordered) {
    arr.push(b('card--bordered'))
  }
  arr.push(b(`card--${props.size}`))
  return arr.join(' ')
})

const getHeaderClass = computed(() => {
  const arr: string[] = [b('card-header')]
  if (props.headerBordered) {
    arr.push(b('card-header--bordered'))
  }
  return arr.join(' ')
})
</script>

<style lang="scss" scoped>
@use '../../../styles/var.scss' as a;

.#{a.$prefix}-card {
  background-color: var(--el-bg-color);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
  --card-padding: 14px;

  &--bordered {
    border: 1px solid var(--el-border-color);
  }
}

.#{a.$prefix}-card-header {
  height: 46px;
  padding: 0 var(--card-padding);
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

.#{a.$prefix}-card-body {
  flex: 1;
  padding: var(--card-padding);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.#{a.$prefix}-card-footer {
  padding: 8px var(--card-padding);
  box-sizing: border-box;
  border-top: 1px solid var(--el-border-color);
  box-sizing: border-box;
}

.#{a.$prefix}-card--small {
  .#{a.$prefix}-card-header {
    font-size: 14px;
    height: 36px;
    padding: 0 10px;
  }

  .#{a.$prefix}-card-body {
    padding: 10px;
  }

  .#{a.$prefix}-card-footer {
    --card-padding: 10px;
    padding: 6px var(--card-padding);
  }
}
</style>
