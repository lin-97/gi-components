<template>
  <GiPageLayout bordered :size="120">
    <template #header>
      <Search></Search>
    </template>
    <template #left>
      <Tree></Tree>
    </template>
    <Table></Table>
  </GiPageLayout>
</template>

<script setup lang="ts">
import Search from './Search.vue'
import Table from './Table.vue'
import Tree from './Tree.vue'
</script>

<style lang="scss" scoped></style>
