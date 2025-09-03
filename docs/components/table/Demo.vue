<template>
  <div class="demo">
    <gi-table :columns="columns" :data="data" :pagination="pagination" border max-height="400px"></gi-table>
  </div>
</template>

<script lang='ts' setup>
import { reactive } from 'vue'

const columns = [
  { prop: 'name', label: '姓名', width: 150 },
  { prop: 'age', label: '年龄', width: 150 },
  { prop: 'sex', label: '性别', width: 150 },
  { prop: 'address', label: '地址' }
]

const data = [
  { name: '张三', age: 18, sex: '男', address: '北京' },
  { name: '李四', age: 20, sex: '女', address: '上海' },
  { name: '王五', age: 22, sex: '男', address: '广州' },
  { name: '赵六', age: 24, sex: '女', address: '深圳' },
  { name: '钱七', age: 26, sex: '男', address: '杭州' },
  { name: '孙八', age: 28, sex: '女', address: '成都' },
  { name: '周九', age: 30, sex: '男', address: '武汉' },
  { name: '吴十', age: 32, sex: '女', address: '厦门' },
  { name: '郑十一', age: 34, sex: '男', address: '南京' },
  { name: '冯十二', age: 36, sex: '女', address: '天津' },
  { name: '陈十三', age: 38, sex: '男', address: '重庆' },
  { name: '廖十四', age: 40, sex: '女', address: '沈阳' },
  { name: '杨十五', age: 42, sex: '男', address: '济南' },
  { name: '张十六', age: 44, sex: '女', address: '青岛' },
  { name: '王十七', age: 46, sex: '男', address: '昆明' },
  { name: '李十八', age: 48, sex: '女', address: '哈尔滨' },
  { name: '张十九', age: 50, sex: '男', address: '长春' },
  { name: '王二十', age: 52, sex: '女', address: '长沙' },
  { name: '李二十一', age: 54, sex: '男', address: '石家庄' },
  { name: '张二十二', age: 56, sex: '女', address: '郑州' },
  { name: '王二十三', age: 58, sex: '男', address: '兰州' },
  { name: '李二十四', age: 60, sex: '女', address: '太原' },
  { name: '张二十五', age: 62, sex: '男', address: '西宁' },
  { name: '王二十六', age: 64, sex: '女', address: '银川' },
  { name: '李二十七', age: 66, sex: '男', address: '乌鲁木齐' },
  { name: '张二十八', age: 68, sex: '女', address: '拉萨' },
  { name: '王二十九', age: 70, sex: '男', address: '西宁' },
  { name: '李三十', age: 72, sex: '女', address: '银川' },
  { name: '张三十一', age: 74, sex: '男', address: '乌鲁木齐' }
]

const pagination = reactive({
  pageSize: 10,
  currentPage: 1,
  total: data.length
})
</script>

<style lang='scss' scoped></style>
