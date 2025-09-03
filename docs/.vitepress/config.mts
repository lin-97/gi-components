import path from 'node:path'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'cn-ZH',
  base: '/gi-components-ele/',
  title: 'Gi Components Ele',
  description: 'A VitePress Site',
  vite: {
    resolve: {
      alias: {
        'gi-components': path.resolve(__dirname, '../../packages/index.ts')
        // 添加你的别名映射
      }
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/quick-start' },
      { text: '组件', link: '/components/button' },
      { text: '工具', link: '/tools/createSelectDialog' }
    ],
    // 路径特定的侧边栏配置
    sidebar: {
      // 指南部分的侧边栏
      '/guide/': [
        {
          text: '入门',
          items: [
            { text: '快速开始', link: '/guide/quick-start' },
            { text: '安装指南', link: '/guide/installation' },
            { text: '常见问题', link: '/guide/faq' }
          ]
        }
      ],
      // 组件部分的侧边栏
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Card 卡片', link: '/components/card' },
            { text: 'Grid 栅格', link: '/components/grid' },
            { text: 'Input Group 输入框组', link: '/components/input-group' },
            { text: 'Input Search 搜索输入框', link: '/components/input-search' },
            { text: 'Page Layout 页面布局', link: '/components/page-layout' },
            { text: 'Tabs 标签页', link: '/components/tabs' }
          ]
        },
        {
          text: '表单组件',
          items: [
            { text: 'Form 表单', link: '/components/form' },
            { text: 'Radio Group 单选框组', link: '/components/radio-group' },
            { text: 'Checkbox Group 多选框组', link: '/components/checkbox-group' },
            { text: 'Select 选择器', link: '/components/select' },
          ]
        },
        {
          text: '交互组件',
          items: [
            { text: 'Dialog 对话框', link: '/components/dialog' },
            { text: 'Dialog 函数对话框', link: '/components/dialog2' },
            { text: 'Edit Table 可编辑表格', link: '/components/edit-table' },
            { text: 'Table 表格', link: '/components/table' }
          ]
        }
      ],
      '/tools/': [
        {
          text: '工具',
          items: [
            { text: 'createSelectDialog', link: '/tools/createSelectDialog' },
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lin-97/gi-components-ele' }
    ]
  },
  markdown: {
    lineNumbers: false // 显示行号
  }
})
