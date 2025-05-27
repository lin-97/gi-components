import elementplus from 'element-plus'
import DefaultTheme from 'vitepress/theme'
import GiComponents from '../../../packages/index'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.use(elementplus)
    app.use(GiComponents) // 全局注册组件库的ap
  }
}
