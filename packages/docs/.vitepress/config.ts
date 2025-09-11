import { defineConfig } from 'vitepress'
import path from 'node:path'

export default defineConfig({
  title: 'GI Components',
  description: 'Vue3中基于Element Plus二次封装基础组件库',
  base: '/gi-components/',
  vite: {
    resolve: {
      alias: {
        // '@gi-components/el': path.resolve(__dirname, '../../../apps/el'),
      }
    }
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      // { text: '指南', link: '/guide/introduction' },
      // { text: '组件', link: '/components/button' },
      // { text: '工具', link: '/tools/createSelectDialog' },
      // { text: '内置CSS类名', link: '/style' },
      // { text: `v${packageJson.version}`, link: '' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lin-97/gi-component' }
    ]
  }
})
