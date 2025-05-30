import ElementPlus from 'element-plus'
import locale from 'element-plus/es/locale/lang/zh-cn'
import DefaultTheme from 'vitepress/theme'
import GiComponents from '../../../packages/index'
// import '../../public/css/index.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.use(ElementPlus, {
      locale // 语言设置
    })
    app.use(GiComponents) // 全局注册组件库的ap
  }
}
