<template>
  <gi-select v-model="value" :options="options" clearable multiple></gi-select>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');
const options = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '选项3', value: '3' },
  { label: '选项4', value: '4' }
];
</script>
