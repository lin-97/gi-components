<template>
  <div>
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="date" label="Date" width="150" />
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column prop="address" label="Address" show-overflow-tooltip />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
</script>
