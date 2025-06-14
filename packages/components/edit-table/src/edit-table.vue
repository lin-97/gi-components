<template>
  <el-form ref="formRef" :model="form">
    <el-table :data="form.tableData" border v-bind="attrs">
      <el-table-column v-for="(column, index) in props.columns" :key="column.dataIndex + index" :width="column.width"
        v-bind="column.columnProps" :prop="column.dataIndex" :label="column.title"
        :label-class-name="getLabelClassName(column)">
        <template #default="scope">
          <el-form-item v-bind="column.formItemProps" :label="column.title"
            :prop="`tableData[${scope.$index}].${column.dataIndex}`" :rules="getFormItemRules(column)">
            <template v-if="column.slotName">
              <slot :name="column.slotName" v-bind="scope"></slot>
            </template>
            <component :is="COMP_MAP[column.type] || column.type" v-else v-bind="getComponentBindProps(column)"
              v-model="scope.row[column.dataIndex]" class="w-full" :disabled="isDisabled(scope)">
            </component>
          </el-form-item>
        </template>
      </el-table-column>
    </el-table>
  </el-form>
</template>

<script lang="ts" setup>
import type { FormInstance } from 'element-plus'
import type { EditTableColumnItem, EditTableColumnItemType } from './type'
import type { EditTableProps } from './type.ts'
import * as El from 'element-plus'
import { computed, h, reactive, ref, toRaw, useAttrs, watch } from 'vue'
import CheckboxGroup from '../../checkbox-group'
import RadioGroup from '../../radio-group'
import Select from '../../select'

const props = withDefaults(defineProps<EditTableProps>(), {
  rowKey: 'id',
  data: () => [],
  columns: () => []
})

const attrs = useAttrs()

const COMP_MAP: Record<Exclude<EditTableColumnItemType, 'slot'>, any> = {
  'input': El.ElInput,
  'textarea': El.ElInput,
  'input-number': El.ElInputNumber,
  'input-tag': El.ElInputTag,
  'select': Select,
  'select-v2': El.ElSelectV2,
  'tree-select': El.ElTreeSelect,
  'cascader': El.ElCascader,
  'slider': El.ElSlider,
  'switch': El.ElSwitch,
  'rate': El.ElRate,
  'checkbox-group': CheckboxGroup,
  'checkbox': El.ElCheckbox,
  'radio-group': RadioGroup,
  'radio': El.ElRadio,
  'date-picker': El.ElDatePicker,
  'time-picker': El.ElTimePicker,
  'time-select': El.ElTimeSelect,
  'color-picker': El.ElColorPicker,
  'transfer': El.ElTransfer,
  'autocomplete': El.ElAutocomplete,
  'upload': El.ElUpload
}

const formRef = ref<FormInstance | null>()

/** 表单数据 */
const form = computed(() => ({ tableData: props.data }))

const clearable = false
/** 组件静态配置 */
const STATIC_PROPS = new Map([
  ['input', { clearable, maxlength: 20 }],
  ['textarea', { clearable, type: 'textarea', rows: 1, maxlength: 200, showWordLimit: true }],
  ['input-number', {}],
  ['input-tag', { clearable }],
  ['select', { clearable }],
  ['select-v2', { clearable }],
  ['tree-select', { clearable }],
  ['cascader', { clearable }],
  ['slider', {}],
  ['switch', {}],
  ['rate', {}],
  ['checkbox-group', {}],
  ['checkbox', {}],
  ['radio-group', {}],
  ['radio', {}],
  ['date-picker', { clearable }],
  ['time-picker', { clearable }],
  ['time-select', { clearable }],
  ['color-picker', {}],
  ['transfer', {}],
  ['autocomplete', {}],
  ['upload', {}],
  ['title', {}]
])

/** 获取占位文本 */
const getPlaceholder = (item: EditTableColumnItem) => {
  if (!item.type) return undefined
  if (['input', 'input-number', 'input-tag'].includes(item.type)) {
    return `请输入${item.title}`
  }
  if (['textarea'].includes(item.type)) {
    return `请填写${item.title}`
  }
  if (['select', 'select-v2', 'tree-select', 'cascader', 'time-select'].includes(item.type)) {
    return `请选择${item.title}`
  }
  if (['date-picker'].includes(item.type)) {
    return `请选择日期`
  }
  if (['time-picker'].includes(item.type)) {
    return `请选择时间`
  }
  return undefined
}

// 组件的默认props配置
function getComponentBindProps(item: EditTableColumnItem) {
  // 获取默认配置
  const defaultProps: any = STATIC_PROPS.get(item.type) || {}
  defaultProps.placeholder = getPlaceholder(item)
  if (item.type === 'date-picker') {
    defaultProps.valueFormat = item?.props?.type === 'datetime' ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'
  }
  // 合并默认配置和自定义配置
  return { ...defaultProps, ...item.props }
}

/** 表单项校验规则 */
function getFormItemRules(item: EditTableColumnItem) {
  if (item.required) {
    return [{ required: true, message: `${item.title}为必填项` }, ...(Array.isArray(item.rules) ? item.rules : [])]
  }
  return item.rules
}

/** 表头标题样式 */
function getLabelClassName(item: EditTableColumnItem) {
  if (item.required) return 'column-required'
  return ''
}

/** 判断是否禁用 */
const isDisabled = (p: any) => {
  if (typeof props?.cellDisabled === 'function') return props.cellDisabled(p)
  return false
}

defineExpose({ formRef })
</script>

<style lang="scss" scoped>
:deep(.el-form-item) {
  margin-bottom: 0;

  .el-form-item__label {
    display: none;
  }
}

:deep(.column-required) {
  .cell {
    position: relative;

    &::after {
      content: '*';
      color: red;
      margin-left: 2px;
    }
  }
}
</style>
