import type * as El from 'element-plus';

export type EditTableColumnItemType =
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
  | 'slot'
  | 'cecw-input-search';

export interface EditTableColumnItem {
  type?: EditTableColumnItemType;
  title: string;
  dataIndex: string;
  width?: number | string;
  required?: boolean;
  rules?: El.FormItemRule[]; // 表单校验规则
  props?: ColumnItemProps;
  columnProps?: El.TableColumnInstance['$props'];
  formItemProps?: El.FormItemProps;
  slotName?: string;
}

export type ColumnItemProps = El.InputProps &
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
  El.UploadProps;

export interface EditTableProps {
  rowKey?: string;
  data?: any[];
  columns?: EditTableColumnItem[];
  cellDisabled?: any;
}
