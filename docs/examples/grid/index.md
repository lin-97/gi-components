# Grid 栅格

## 基础用法

<script setup>
import Demo1 from './demo1.vue'
</script>

<Demo1></Demo1>

```vue
<template>
  <div style="margin-bottom: 20px;">
    <el-text class="mx-1">折叠：</el-text>
    <el-switch v-model="collapsed" />
  </div>
  <gi-grid :cols="3" :col-gap="12" :row-gap="16" class="grid-demo-grid" :collapsed="collapsed">
    <gi-grid-item class="demo-item">item1</gi-grid-item>
    <gi-grid-item class="demo-item">item2</gi-grid-item>
    <gi-grid-item class="demo-item">item3</gi-grid-item>
    <gi-grid-item class="demo-item" :offset="1">item4 | offset - 1</gi-grid-item>
    <gi-grid-item class="demo-item">item5</gi-grid-item>
    <gi-grid-item class="demo-item" :span="3">item6 | span - 3</gi-grid-item>
    <gi-grid-item class="demo-item">item7</gi-grid-item>
    <gi-grid-item class="demo-item">item8</gi-grid-item>
    <gi-grid-item class="demo-item" suffix #="{ overflow }">
      suffix | overflow: {{ overflow }}
    </gi-grid-item>
  </gi-grid>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const collapsed = ref(false)
</script>

<style lang="scss" scoped>
.grid-demo-grid .demo-item,
.grid-demo-grid .demo-suffix {
  height: 48px;
  line-height: 48px;
  color: var(--el-color-white);
  text-align: center;
}

.grid-demo-grid .demo-item:nth-child(2n) {
  background-color: var(--el-color-primary);
}

.grid-demo-grid .demo-item:nth-child(2n + 1) {
  background-color: var(--el-color-success);
}
</style>
```
