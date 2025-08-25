<template>
  <el-form ref="formRef" :class="getClass" v-bind="formProps" :model="props.modelValue">
    <Grid class="w-full" :col-gap="12" v-bind="props.gridProps" :collapsed="collapsed">
      <template v-for="(item, index) in props.columns">
        <GridItem v-if="item.type === 'title'" :key="`title${index}`" :span="100">
          <el-form-item label-width="0">
            <GiCard :title="typeof item.label === 'string' ? item.label : ''" :header-style="{ padding: 0 }"
              :body-style="{ display: 'none' }"></GiCard>
          </el-form-item>
        </GridItem>

        <template v-else>
          <GridItem v-if="item.show !== undefined ? isShow(item) : !isHide(item)" :key="item.field + index"
            v-bind="item.gridItemProps || props.gridItemProps"
            :span="item.span || item.gridItemProps?.span || props?.gridItemProps?.span">
            <el-form-item :key="item.field + index" :prop="item.field" :rules="getFormItemRules(item)"
              v-bind="item.formItemProps">
              <template #label>
                <template v-if="typeof item.label === 'string'">
                  {{ item.label }}
                </template>
                <component :is="item.label" v-else></component>
              </template>
              <div v-if="item.type === 'slot'" class="w-full">
                <slot :name="item.field" :item="item"></slot>
              </div>
              <template v-else>
                <div :class="b('form-item__content')">
                  <div :class="b('form-item__component')">
                    <component :is="CompMap[item.type] || item.type" :disabled="isDisabled(item)" class="w-full"
                      v-bind="getComponentBindProps(item)" :model-value="props.modelValue[item.field]"
                      :name="props.modelValue[item.fieldName ?? '']"
                      @update:model-value="updateModelValue($event, item)">
                      <template v-for="(slotValue, slotKey) in item?.slots || {}" :key="slotKey" #[slotKey]="scope">
                        <template v-if="typeof slotValue === 'string'">
                          {{ slotValue }}
                        </template>
                        <template v-else-if="slotValue">
                          <component :is="slotValue(scope)"></component>
                        </template>
                      </template>
                    </component>
                    <el-text v-if="item.tip" :class="b('form-item__tip')" type="info" size="small">
                      {{ item.tip }}
                    </el-text>
                  </div>
                  <!-- 额外信息 -->
                  <div v-if="item.extra" :class="b('form-item__extra')">
                    <template v-if="typeof item.extra === 'string'">
                      <el-text type="info" size="small">{{ item.extra }}</el-text>
                    </template>
                    <template v-else-if="item.extra">
                      <component :is="item.extra"></component>
                    </template>
                  </div>
                </div>
              </template>
            </el-form-item>
          </GridItem>
        </template>
      </template>

      <GridItem v-if="props.search" :suffix="props.search" :span="props?.gridItemProps?.span">
        <el-space :class="b('search-btns')">
          <el-button type="primary" @click="emit('search')"> {{ searchText }} </el-button>
          <el-button @click="emit('reset')"> 重置 </el-button>
          <el-button v-if="!props.hideFoldBtn" class="form__fold-btn" type="primary"
            :icon="collapsed ? ArrowDown : ArrowUp" text size="small" @click="collapsed = !collapsed">
            {{ collapsed ? '展开' : '收起' }}
          </el-button>
        </el-space>
      </GridItem>
    </Grid>
  </el-form>
</template>

<script lang="tsx" setup>
import type { ColumnType, FormColumnItem } from './type'
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue'
import * as El from 'element-plus'
import { computed, ref, toRaw, watch } from 'vue'
import { useBemClass } from '../../../hooks'
import GiCard from '../../card'
import CheckboxGroup from '../../checkbox-group'
import { Grid, GridItem } from '../../grid'
import RadioGroup from '../../radio-group'
import Select from '../../select'

const props = withDefaults(defineProps<Props>(), {
  columns: () => [],
  labelWidth: '60px',
  scrollToError: true,
  // xs, sm, md, lg, xl, xxl
  gridItemProps: { span: { xs: 24, sm: 24, md: 12 } },
  search: false,
  searchText: '查询',
  hideFoldBtn: false,
  defaultCollapsed: undefined
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
  (e: 'search'): void
  (e: 'reset'): void
}>()

type ColumnItem = FormColumnItem

interface Props {
  modelValue: any
  columns?: ColumnItem[]
  gridProps?: any
  gridItemProps?: any // grid-item默认配置
  search?: boolean
  rules?: El.FormRules
  inline?: El.FormProps['inline']
  labelPosition?: El.FormProps['labelPosition']
  labelWidth?: El.FormProps['labelWidth']
  labelSuffix?: El.FormProps['labelSuffix']
  hideRequiredAsterisk?: El.FormProps['hideRequiredAsterisk']
  requireAsteriskPosition?: El.FormProps['requireAsteriskPosition']
  showMessage?: El.FormProps['showMessage']
  inlineMessage?: El.FormProps['inlineMessage']
  statusIcon?: El.FormProps['statusIcon']
  validateOnRuleChange?: El.FormProps['validateOnRuleChange']
  size?: El.FormProps['size']
  disabled?: El.FormProps['disabled']
  scrollToError?: El.FormProps['scrollToError']
  scrollIntoViewOptions?: El.FormProps['scrollIntoViewOptions']
  searchText?: string
  hideFoldBtn?: boolean
  defaultCollapsed?: boolean | undefined
}

const { b } = useBemClass()
const collapsed = ref(props?.defaultCollapsed ?? props.search)

const formProps = computed(() => {
  return {
    ...props,
    columns: undefined,
    gridProps: undefined,
    gridItemProps: undefined
  }
})

const getClass = computed(() => {
  const arr: string[] = [b('form')]
  if (props.search) {
    arr.push(b('form--search'))
  }
  return arr.join(' ')
})

const CompMap: Record<Exclude<ColumnType, 'slot'>, any> = {
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
  'upload': El.ElUpload,
  'title': El.ElAlert
}

const formRef = ref()

const clearable = false
/** 组件静态配置 */
const STATIC_PROPS = new Map([
  ['input', { clearable, maxlength: 20 }],
  ['textarea', { clearable, type: 'textarea', maxlength: 200, showWordLimit: true }],
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
const getPlaceholder = (item: ColumnItem) => {
  if (!item.type) return undefined
  if (['input', 'input-number', 'input-tag'].includes(item.type)) {
    return `请输入${item.label}`
  }
  if (['textarea'].includes(item.type)) {
    return `请填写${item.label}`
  }
  if (['select', 'select-v2', 'tree-select', 'cascader', 'time-select'].includes(item.type)) {
    return `请选择${item.label}`
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
function getComponentBindProps(item: ColumnItem) {
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
function getFormItemRules(item: ColumnItem) {
  if (item.required) {
    return [{ required: true, message: `${item.label}为必填项` }, ...(Array.isArray(item.rules) ? item.rules : [])]
  }
  return item.rules
}

/** 显示表单项 */
function isShow(item: ColumnItem) {
  if (typeof item.show === 'boolean') return item.show
  if (typeof item.show === 'function') {
    return item.show(props.modelValue)
  }
}

/** 隐藏表单项 */
function isHide(item: ColumnItem) {
  if (typeof item.hide === 'boolean') return item.hide
  if (typeof item.hide === 'function') {
    return item.hide(props.modelValue)
  }
  if (item.hide === undefined) return false
}

/** 禁用表单项 */
function isDisabled(item: ColumnItem) {
  if (item?.props?.disabled !== undefined) return item?.props?.disabled
  return false
}

/** 表单数据更新  */
function updateModelValue(value: any, item: ColumnItem) {
  emit('update:modelValue', Object.assign(props.modelValue, { [item.field]: value }))
}

watch(
  () => props.modelValue,
  () => {
    // eslint-disable-next-line no-console
    console.log('form', toRaw(props.modelValue))
  },
  { deep: true }
)

defineExpose({ formRef })
</script>

<style lang="scss" scoped>
@use '../../../styles/var.scss' as a;

.el-form {
  width: 100%;
}

:deep(.el-form-item) {
  align-items: center;

  .el-form-item__label {
    height: inherit;
    line-height: inherit;
  }
}

:deep(.hide-label) {

  // 隐藏el-form-item__label才能完整占满插槽宽度
  .el-form-item__label {
    display: none;
  }
}

.#{a.$prefix}-form {
  &-item {
    &__content {
      width: 100%;
      display: flex;
    }

    &__component {
      flex: 1;
    }

    &__tip {
      line-height: 1.5;
      color: var(--el-color-info-light-3);
    }

    &__extra {
      margin-left: 6px;
    }
  }

  &__search-btns {
    margin-bottom: 8px;
  }
}

.#{a.$prefix}-form--search {
  :deep(.el-form-item) {
    margin-bottom: 8px;
  }
}

:deep(.w-full) {
  width: 100%;

  .el-date-editor {
    width: 100%;
  }
}
</style>
