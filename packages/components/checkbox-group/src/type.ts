import type { CheckboxGroupProps as ElCheckboxGroupProps } from 'element-plus'

export type CheckboxGroupOptionItem = {
  label: string
  value: string
  disabled?: boolean
}

export interface CheckboxGroupProps extends Partial<ElCheckboxGroupProps> {
  options?: CheckboxGroupOptionItem[]
}
