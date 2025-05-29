import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'cn-ZH',
  base: '/gi-components/',
  title: 'Gi Components',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/examples/button' }
    ],
    sidebar: [
      {
        text: '组件',
        items: [
          { text: '按钮 Button', link: '/examples/button' },
          { text: '卡片 Card', link: '/examples/card' },
          { text: '下拉选择 Select', link: '/examples/select' },
          { text: '单选组合 RadioGroup', link: '/examples/radio-group' },
          { text: '多选组合 CheckboxGroup', link: '/examples/checkbox-group' },
          { text: '标签页 Tabs', link: '/examples/tabs' },
          { text: '输入框组 InputGroup', link: '/examples/input-group' },
          { text: '栅格 Grid', link: '/examples/grid' },
          { text: '配置表单 Form', link: '/examples/form' },
          { text: '对话框 Dialog', link: '/examples/dialog' },
          { text: '函数对话框 Dialog', link: '/examples/dialog2' },
          { text: '页面布局 PageLayout', link: '/examples/page-layout' },
          { text: '编辑 EditTable', link: '/examples/edit-table' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lin-97/gi-components' }
    ]
  },
  markdown: {
    lineNumbers: false // 显示行号
  }
})
