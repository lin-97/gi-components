import type * as El from 'element-plus'
import type { VNode } from 'vue'

export type ColumnType =
  | 'input'
  | 'textarea'
  | 'input-number'
  | 'input-tag'
  | 'select'
  | 'select-v2'
  | 'tree-select'
  | 'cascader'
  | 'slider'
  | 'switch'
  | 'rate'
  | 'checkbox-group'
  | 'checkbox'
  | 'radio-group'
  | 'radio'
  | 'date-picker'
  | 'time-picker'
  | 'time-select'
  | 'color-picker'
  | 'transfer'
  | 'autocomplete'
  | 'upload'
  | 'title'
  | 'slot'

export type ColumnProps = El.InputProps &
  El.InputNumberProps &
  El.InputTagProps &
  El.ISelectProps &
  El.ISelectV2Props &
  El.TreeInstance['$props'] &
  El.CascaderProps &
  El.SliderProps &
  El.SwitchProps &
  El.RateProps &
  El.CheckboxGroupProps &
  El.CheckboxProps &
  El.RadioGroupProps &
  El.RadioProps &
  El.DatePickerProps &
  El.TimePickerDefaultProps &
  El.TimeSelectProps &
  El.ColorPickerProps &
  El.TransferProps &
  El.AutocompleteProps &
  El.UploadProps

export type ColumnItemHide<F> = boolean | ((form: F) => boolean)
export type ColumnItemShow<F> = boolean | ((form: F) => boolean)

export type ColumnSlots = El.InputInstance['$slots'] &
  El.InputNumberInstance['$slots'] &
  El.InputTagInstance['$slots'] &
  El.AutocompleteInstance['$slots'] &
  El.CascaderInstance['$slots'] &
  El.DatePickerInstance['$slots']

export interface FormColumnItem<F = any> {
  type: ColumnType
  label?: string | VNode
  field: string
  fieldName?: string
  span?: number
  props?: ColumnProps & { options?: El.RadioProps & El.CheckboxProps & El.ISelectProps }
  formItemProps?: El.FormItemProps
  gridItemProps?: any
  required?: boolean
  rules?: El.FormItemRule[]
  hide?: ColumnItemHide<F> // 是否隐藏
  show?: ColumnItemShow<F> // 是否显示（优先级比hide高）
  tip?: string
  dictCode?: string // 字典编码
  slotName?: string
  slots?: ColumnSlots
  extra?: string | VNode // 右侧额外内容
}
