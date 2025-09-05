<template>
  <gi-card title="基础表格" bordered>
    <el-row justify="end">
      <el-space>
        <el-input v-model="searchKeyword" placeholder="搜索姓名或地址" clearable style="width: 200px;" />
        <el-button type="primary" @click="loadData()">搜索</el-button>
      </el-space>
    </el-row>
    <gi-table class="gi-mt" v-loading="loading" :columns="columns" :data="data" :pagination="pagination" border
      max-height="400px">
      <template #action="scope">
        <el-space>
          <el-button type="primary" size="small" @click="onEdit(scope)">编辑</el-button>
          <el-button type="danger" size="small">删除</el-button>
        </el-space>
      </template>
    </gi-table>
  </gi-card>
</template>

<script lang='ts' setup>
import { reactive, ref, onMounted, watch } from 'vue'
import { ElMessage } from 'element-plus'
import { type TableColumnItem } from '@gi-components/el'
import { fetchTableData, type TableData, type PaginationParams } from './tool'

const columns: TableColumnItem[] = [
  { type: 'selection', width: 55, align: 'center', fixed: 'left' },
  { type: 'index', label: '序号', width: 60, align: 'center' },
  { prop: 'name', label: '姓名', width: 100, align: 'center', showOverflowTooltip: true },
  { prop: 'age', label: '年龄', width: 60, align: 'center' },
  { prop: 'sex', label: '性别', width: 60, align: 'center' },
  {
    prop: 'address', label: '地址', children: [
      { prop: 'city', label: '城市', width: 150 },
      { prop: 'district', label: '区县', width: 150 },
    ]
  },
  { prop: 'remark', label: '描述', width: 150, showOverflowTooltip: true },
  { prop: 'action', label: '操作', width: 150, align: 'center', slotName: 'action', fixed: 'right' },
]

// 响应式数据
const data = ref<TableData[]>([])
const loading = ref(false)
const searchKeyword = ref('')

// 分页配置
const pagination = reactive({
  pageSize: 10,
  currentPage: 1,
  total: 0,
  // 监听分页变化，重新加载数据
  onSizeChange: (size: number) => {
    pagination.pageSize = size
    loadData()
  },
  onCurrentChange: (current: number) => {
    pagination.currentPage = current
    loadData()
  }
})

// 加载数据的函数
async function loadData() {
  loading.value = true

  try {
    const params: PaginationParams = {
      currentPage: pagination.currentPage,
      pageSize: pagination.pageSize,
      keyword: searchKeyword.value.trim()
    }

    const response = await fetchTableData(params)
    data.value = response.data
    pagination.total = response.total

    ElMessage.success(`成功加载 ${response.data.length} 条数据`)
  } catch (error) {
    ElMessage.error('数据加载失败')
    console.error('Failed to load data:', error)
  } finally {
    loading.value = false
  }
}

// 编辑操作
function onEdit(scope: any) {
  console.log('Edit row:', scope.row)
  ElMessage.success(`编辑 ${scope.row.name}`)
}

// 监听搜索关键词变化
watch(searchKeyword, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    // 重置为第一页
    pagination.currentPage = 1
    // 延迟搜索，避免频繁请求
    setTimeout(() => {
      loadData()
    }, 300)
  }
})

// 组件挂载时加载初始数据
onMounted(() => {
  loadData()
})
</script>

<style lang='scss' scoped></style>
