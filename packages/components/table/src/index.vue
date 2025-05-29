<template>
  <div class="gi-table">
    <el-table v-bind="tableProps">
      <template v-for="item in props.columns" :key="item.prop">
        <el-table-column v-bind="item"></el-table-column>
      </template>
    </el-table>

    <el-pagination v-bind="paginationProps" />
  </div>
</template>

<script lang="ts" setup>
import type { TableProps } from './type'
import { computed, useAttrs } from 'vue'

const props = withDefaults(defineProps<TableProps<any>>(), {
  columns: () => [],
  pagination: () => ({})
})

const attrs = useAttrs()

const tableProps = computed(() => {
  return {
    ...props,
    ...attrs,
    columns: undefined,
    pagination: undefined
  }
})

const paginationProps = computed(() => {
  return {
    // background: true,
    // pagerCount: 7,
    // layout: 'prev, pager, next, jumper, ->, total',
    // pageSizes: [10, 20, 50, 100],
    ...props.pagination
  }
})
</script>

<style lang="scss" scoped></style>
