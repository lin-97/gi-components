import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/gi-components/',
  title: 'Gi Components',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/examples/gi-button' }
    ],
    sidebar: [
      {
        text: '组件',
        items: [
          { text: '按钮 GiButton', link: '/examples/gi-button' },
          { text: '卡片 GiCard', link: '/examples/gi-card' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lin-97/gi-components' }
    ]
  }
})
