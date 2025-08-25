import { createSelectDialog } from '../../../packages/utils/createSelectDialog'
import TreeTable from './components/TreeTable.vue'

export const selectUserListDialog = createSelectDialog({
  title: '选择用户',
  component: TreeTable
})
