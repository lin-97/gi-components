<template>
  <gi-page-layout bordered :size="80">
    <template #header>
      <Search></Search>
    </template>
    <template #left>
      <Tree></Tree>
    </template>
    <Table></Table>
  </gi-page-layout>
</template>

<script setup lang="ts">
import Search from './components/Search.vue'
import Table from './components/Table.vue'
import Tree from './components/Tree.vue'
</script>

<style lang="scss" scoped></style>
