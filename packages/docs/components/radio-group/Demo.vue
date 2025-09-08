<template>
  <div>
    <gi-radio-group v-model="value" :options="options"></gi-radio-group>
    <p>绑定的值value: {{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('1');
const options = [
  { label: '男', value: '1' },
  { label: '女', value: '2' }
];
</script>

<style lang="scss" scoped></style>
