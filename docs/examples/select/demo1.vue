<template>
  <div>
    <gi-select v-model="value" :options="options" clearable></gi-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
const options = [{ label: '男', value: '1' }, { label: '女', value: '2' }]
</script>

<style lang="scss" scoped></style>
