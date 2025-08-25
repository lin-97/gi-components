<template>
  <div :class="b('table')">
    <el-table v-bind="tableProps">
      <template v-for="item in props.columns" :key="item.prop">
        <el-table-column v-bind="item"></el-table-column>
      </template>
    </el-table>

    <el-row justify="end" :class="b('table-pagination')">
      <el-pagination layout="prev, pager, next, jumper, ->, total" :total="50" background />
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import type { TableProps as ElTableProps, PaginationProps, TableColumnInstance } from 'element-plus'
import type { TableProps } from './type'
import { computed, useAttrs } from 'vue'
import { useBemClass } from '../../../hooks'

const props = withDefaults(defineProps<TableProps>(), {
  columns: () => [],
  pagination: () => ({})
})

const attrs = useAttrs() as unknown as ElTableProps<any>
const { b } = useBemClass()

const tableProps = computed(() => {
  return {
    ...attrs,
    ...props,
    columns: undefined,
    pagination: undefined
  }
})

const paginationProps = computed(() => {
  return {
    currentPage: 1,
    pageSize: 10,
    background: true,
    pagerCount: 7,
    layout: 'prev, pager, next, jumper, ->, total',
    pageSizes: [10, 20, 50, 100],
    total: 100,
    ...props.pagination || {}
  }
})
</script>

<style lang="scss" scoped>
@use '../../../styles/var.scss' as a;

:deep(.el-pagination__rightwrapper) {
  flex: auto;
}

.#{a.$prefix}-table-pagination {
  margin-top: 10px;
}
</style>
