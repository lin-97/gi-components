import type { CSSProperties } from 'vue'
import type {SplitterPanelProps} from 'element-plus'

export interface PageLayoutProps {
  size?: SplitterPanelProps['size'];
  bordered?: boolean
  leftStyle?: CSSProperties
  headerStyle?: CSSProperties
  toolStyle?: CSSProperties
  bodyStyle?: CSSProperties
}
