import type { RadioGroupProps as ElRadioGroupProps } from 'element-plus';

export type RadioGroupOptionItem = {
  label: string;
  value: string;
  disabled?: boolean;
};

export interface RadioGroupProps extends Partial<ElRadioGroupProps> {
  options?: RadioGroupOptionItem[];
}
