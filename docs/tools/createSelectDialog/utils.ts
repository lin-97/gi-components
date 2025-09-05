import { createSelectDialog } from '@gi-components/el'
import TreeTable, { type TableDataItem } from './components/TreeTable.vue'

/**
 * 选择用户列表对话框
 * TreeTable组件需要暴露getSelectedData方法
 */
export const selectUserListDialog = createSelectDialog<TableDataItem[]>({
  title: '选择用户',
  component: TreeTable
})
