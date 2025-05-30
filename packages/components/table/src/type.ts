import type { TableProps as ElTableProps, PaginationProps, TableColumnInstance } from 'element-plus'
import type { ExtractPropTypes } from 'vue'

export interface TableProps extends ExtractPropTypes<ElTableProps<any>> {
  columns?: TableColumnInstance['$props'][]
  pagination?: Partial<PaginationProps>
}
