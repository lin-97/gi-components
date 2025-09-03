<template>
  <el-button type="primary" @click="openDialog">打开对话框</el-button>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { Dialog } from '@gi-components/el'

const openDialog = () => {
  Dialog.open({
    title: '标题',
    content: '落霞与孤鹜齐飞，秋水共长天一色',
    footer: false
  })
}
</script>
