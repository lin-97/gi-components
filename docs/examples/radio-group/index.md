# RadioGroup 下拉组合

## 基础用法

<script setup>
import Demo1 from './demo1.vue'
</script>

<Demo1></Demo1>

```vue
<template>
  <gi-radio-group v-model="value" :options="options"></gi-radio-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
const options = [{ label: '男', value: '1' }, { label: '女', value: '2' }]
</script>
```
