import type { CSSProperties } from 'vue'

export interface CardProps {
  title?: string
  extra?: string
  bordered?: boolean
  headerBordered?: boolean
  headerStyle?: CSSProperties
  bodyStyle?: CSSProperties
}
