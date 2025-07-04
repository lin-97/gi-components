<template>
  <div class="gi-tabs" :class="getClass">
    <div class="gi-tabs__default">
      <slot>
        <el-tabs v-model="model" :type="props.type" :stretch="props.stretch" @tab-click="props.onTabClick"
          @tab-change="props.onTabChange">
          <el-tab-pane v-for="item in props.options" :key="item.name" :name="item.name" :disabled="item?.disabled">
            <template #label>
              <slot name="label" :data="item">{{ item.label }}</slot>
            </template>
          </el-tab-pane>
        </el-tabs>
      </slot>
    </div>
    <div v-if="slots.extra" class="gi-tabs__extra">
      <slot name="extra"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TabsOptionItem, TabsProps } from './type.ts'
import { computed, useSlots } from 'vue'

const model = defineModel()

const props = withDefaults(defineProps<TabsProps>(), {
  type: '',
  options: () => [],
  size: 'medium'
})

defineSlots<{
  default: () => void
  extra: () => void
  label: (e: { data: TabsOptionItem }) => void
}>()

const slots = useSlots()

const getClass = computed(() => {
  const arr: string[] = []
  arr.push(`gi-tabs--${props.size}`)
  return arr.join(' ')
})
</script>

<style lang="scss" scoped>
:deep(.el-tabs__nav-prev),
:deep(.el-tabs__nav-next) {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gi-tabs {
  width: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--el-border-color);
  box-sizing: border-box;
  background-color: var(--el-bg-color);

  &__default {
    flex: 1;
    overflow: hidden;

    :deep(.el-tabs__header) {
      margin-bottom: 0;

      .el-tabs__nav-wrap {
        &::after {
          display: none;
        }
      }
    }

    :deep(.el-tabs__active-bar) {
      bottom: 1px;
    }
  }

  &__extra {
    margin-left: 10px;
    align-self: flex-start;
  }
}

:deep(.el-tabs--card) {
  >.el-tabs__header {
    border-bottom: none;
  }
}

:deep(.el-tabs--border-card) {
  border-bottom: none;

  >.el-tabs__content {
    display: none;
  }

  >.el-tabs__header {
    border-bottom: none;
  }
}

.gi-tabs--small {
  :deep(.el-tabs) {
    --el-tabs-header-height: 32px;

    .el-tabs__item {
      font-size: 12px;
    }
  }
}
</style>
