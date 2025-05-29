import type { TableProps as ElTableProps, PaginationProps, TableColumnInstance } from 'element-plus'

export interface TableProps<T> extends Partial<ElTableProps<T>> {
  columns?: TableColumnInstance['$props']
  pagination?: PaginationProps
}
