<template>
  <div>
    <el-button type="primary" @click="select">选择用户</el-button>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { selectUserListDialog } from './utils'

function select() {
  selectUserListDialog({
    onOk: () => {
      ElMessage.success('点击了确定按钮')
    }
  })
}
</script>
