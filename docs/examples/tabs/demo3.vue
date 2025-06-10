<template>
  <gi-tabs v-model="activeName" :options="options" type="card" style="padding: 0">
    <template #extra>
      <el-space>
        <el-button type="primary">保存</el-button>
        <el-button>返回</el-button>
      </el-space>
    </template>
    <template #label="{ data }">
      <span>{{ data.label }}</span>
      <el-text type="danger">{{ countObj[data.name] }}</el-text>
    </template>
  </gi-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeName = ref('1')
const options = [
  { label: '全部', name: 'a' },
  { label: '待审批', name: 'b' },
  { label: '已审批', name: 'c' },
  { label: '草稿', name: 'd' }
]

const countObj = ref({ a: 5, b: 10, c: 15, d: 6 })
</script>
