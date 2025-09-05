import type { TableProps as ElTableProps, PaginationProps, TableColumnInstance } from 'element-plus'
import type { ExtractPropTypes, VNode } from 'vue'

export interface TableColumnItem extends Omit<TableColumnInstance['$props'], never> {
  slotName?: string
  render?: (row: Record<string | number | symbol, any>, index: number) => VNode
  children?: TableColumnItem[]
}

export interface TableProps extends ExtractPropTypes<ElTableProps<Record<string | number | symbol, any>>> {
  columns?: TableColumnItem[]
  pagination?: Partial<PaginationProps>
}
