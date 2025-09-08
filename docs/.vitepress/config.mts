import path from 'node:path'
import { defineConfig } from 'vitepress'
import packageJson from '../../package.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'cn-ZH',
  base: '/gi-components/',
  title: 'Gi Components',
  description: 'Vue3中基于Element Plus二次封装基础组件库',
  vite: {
    resolve: {
      alias: {
        '@gi-components/el': path.resolve(__dirname, '../../packages/index.ts')
      }
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/introduction' },
      { text: '组件', link: '/components/button' },
      { text: '工具', link: '/tools/createSelectDialog' },
      { text: '内置CSS类名', link: '/style' },
      { text: `v${packageJson.version}`, link: '' }
    ],
    // 路径特定的侧边栏配置
    sidebar: {
      // 指南部分的侧边栏
      '/guide/': [
        {
          text: '入门',
          items: [
            { text: '简介', link: '/guide/introduction' },
            { text: '安装指南', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quick-start' },
            { text: '更新日志', link: '/guide/changelog' },
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
            { text: 'InputGroup 输入框组', link: '/components/input-group' },
            { text: 'InputSearch 搜索输入框', link: '/components/input-search' },
            { text: 'PageLayout 页面布局', link: '/components/page-layout' },
            { text: 'Tabs 标签页', link: '/components/tabs' }
          ]
        },
        {
          text: '表单组件',
          items: [
            { text: 'Form 表单', link: '/components/form' },
          ]
        },
        {
          text: '交互组件',
          items: [
            { text: 'Dialog 对话框', link: '/components/dialog' },
            { text: 'Dialog 函数对话框', link: '/components/dialog2' },
            { text: 'EditTable 可编辑表格', link: '/components/edit-table' },
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
      { icon: 'github', link: 'https://github.com/lin-97/gi-components' }
    ]
  },
  markdown: {
    lineNumbers: false // 显示行号
  }
})
