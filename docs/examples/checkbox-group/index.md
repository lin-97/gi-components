# RadioGroup 下拉组合

## 基础用法

<script setup>
import Demo1 from './demo1.vue'
</script>

<Demo1></Demo1>

```vue
<template>
  <gi-checkbox-group v-model="value" :options="options"></gi-checkbox-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(['1'])
const options = [{ label: '游戏', value: '1' }, { label: '音乐', value: '2' }, { label: '电影', value: '3' }]
</script>
```
