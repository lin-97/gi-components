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
  { label: '游戏', value: '1' },
  { label: '音乐', value: '2' },
  { label: '电影', value: '3' }
];
</script>
