<template>
  <gi-form ref="GiFormRef" v-model="form" :columns="columns"
    :grid-item-props="{ span: { xs: 24, sm: 12, md: 12, lg: 12, xl: 12, xxl: 12 } }">
  </gi-form>
</template>

<script lang="ts" setup>
import type { FormColumnItem, FormInstance } from '../../../packages/components/form'
import { computed, reactive, ref } from 'vue'
import { useDictStore } from './useDictStore'

const GiFormRef = ref<FormInstance | null>()

const form = reactive({
  status: '1'
})
const { dict } = useDictStore(['SEX', 'STATUS', 'HOBBY'])

const columns = computed(() => {
  return [
    {
      type: 'select',
      label: '性别',
      field: 'sex',
      props: {
        options: dict.SEX
      }
    },
    {
      type: 'radio-group',
      label: '状态',
      field: 'status',
      props: {
        options: dict.STATUS
      }
    },
    {
      type: 'checkbox-group',
      label: '兴趣',
      field: 'hobby',
      props: {
        options: dict.HOBBY
      }
    }
  ] as FormColumnItem[]
})
</script>
