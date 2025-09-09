import { resolve } from 'node:path';
import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'GI Components',
  description: 'Vue3中基于Element Plus二次封装基础组件库',
  base: '/gi-components/',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/introduction' },
      { text: '组件', link: '/components/button' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/introduction' },
            { text: '快速开始', link: '/guide/quick-start' },
            { text: '安装', link: '/guide/installation' },
            { text: '更新日志', link: '/guide/changelog' }
          ]
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Card 卡片', link: '/components/card' },
            { text: 'Dialog 对话框', link: '/components/dialog' },
            { text: 'Form 表单', link: '/components/form' },
            { text: 'Table 表格', link: '/components/table' },
            { text: 'Tabs 标签页', link: '/components/tabs' }
          ]
        },
        {
          text: '输入组件',
          items: [
            { text: 'InputGroup 输入组', link: '/components/input-group' },
            { text: 'InputSearch 搜索输入', link: '/components/input-search' },
            { text: 'Select 选择器', link: '/components/select' },
            { text: 'RadioGroup 单选框组', link: '/components/radio-group' },
            {
              text: 'CheckboxGroup 复选框组',
              link: '/components/checkbox-group'
            }
          ]
        },
        {
          text: '布局组件',
          items: [
            { text: 'Grid 栅格', link: '/components/grid' },
            { text: 'PageLayout 页面布局', link: '/components/page-layout' }
          ]
        },
        {
          text: '其他组件',
          items: [
            { text: 'EditTable 可编辑表格', link: '/components/edit-table' }
          ]
        }
      ],
      '/tools/': [
        {
          text: '工具',
          items: [
            { text: 'createSelectDialog', link: '/tools/createSelectDialog' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lin-97/gi-components' }
    ]
  }
});
