<template>
  <div>
    <gi-checkbox-group v-model="value" :options="options"></gi-checkbox-group>
    <p>绑定的值value: {{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(['1']);
const options = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '选项3', value: '3' },
  { label: '选项4', value: '4' }
];
</script>
