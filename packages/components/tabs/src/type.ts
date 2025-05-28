import type { TabsProps as ElTabsProps } from 'element-plus'

export type TabsOptionItem = {
  label: string
  name: string
  disabled?: boolean
}

export interface TabsProps extends Partial<Pick<ElTabsProps, 'type' | 'stretch'>> {
  options?: TabsOptionItem[]
}
