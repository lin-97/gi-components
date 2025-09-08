import type { SelectProps as ElSelectProps } from 'element-plus';

export type SelectOptionItem = {
  label: string;
  value: string;
  disabled?: boolean;
};

export interface SelectProps extends Partial<ElSelectProps> {
  options?: SelectOptionItem[];
}
