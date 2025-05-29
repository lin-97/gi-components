import type { AppContext } from 'vue'
import type { DialogInstance as GiDialogInstance } from '../index'
import ElementPlus from 'element-plus'
import { createApp, h, ref } from 'vue'
import GiDialog from './index.vue'

type DialogOptions = Partial<GiDialogInstance['$props']>

export interface DialogInstance {
  close: () => void
  update: (newProps?: Record<string, any>) => void
}

const defaultOptions: DialogOptions = {
  // width: '600px',
  // center: false,
  // footer: true,
  // closeOnClickModal: true
}

export function createDialog(appContext?: AppContext) {
  const dialog = {
    // 核心创建方法
    create(options: DialogOptions): DialogInstance {
      const mergedOptions = { ...defaultOptions, ...options }
      let context = null
      // 创建容器
      const container = document.createElement('div')
      document.body.appendChild(container)

      // 状态管理
      const visible = ref(true)
      const dialogOptions = ref(mergedOptions || {})

      // 创建弹窗应用
      const dialogApp = createApp({
        setup() {
          // context = appContext || getCurrentInstance()?.appContext;
          // console.log('getCurrentInstance', getCurrentInstance());
          // 关闭处理
          const closed = () => {
            dialogApp.unmount()
            container.remove()
          }

          return () =>
            h(GiDialog, {
              ...dialogOptions.value,
              'modelValue': visible.value,
              'onUpdate:modelValue': (val: boolean) => (visible.value = val),
              'onClosed': () => closed()
            })
        }
      })

      dialogApp.use(ElementPlus)

      // 继承上下文
      if (context) {
        dialogApp._context = Object.assign({}, context)
        // dialogApp.config.globalProperties = context.config.globalProperties;
      }

      // 挂载
      dialogApp.mount(container)

      return {
        /** 关闭对话框 */
        close: () => {
          visible.value = false
          setTimeout(() => {
            dialogApp.unmount()
            container.remove()
          }, 300)
        },
        /** 更新对话框 */
        update: (newProps?: Record<string, any>) => {
          dialogOptions.value = { ...dialogOptions.value, ...newProps }
        }
      }
    },

    /** 对话框-打开 */
    open(options: DialogOptions) {
      return this.create(options)
    }
  }

  return dialog
}

// 默认导出实例
export const Dialog = createDialog()
