import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "Gi Components",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: '组件',
        items: [
          { text: '组件1', link: '/markdown-examples' },
          { text: '组件2', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lin-97/gi-components' }
    ]
  }
})
