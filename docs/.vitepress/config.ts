import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Link UI',
  description: 'Vue 3 + WeUI mobile component library',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/introduce' }
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '介绍', link: '/guide/introduce' },
          { text: '安装', link: '/guide/installation' },
          { text: '快速开始', link: '/guide/usage' },
          { text: '主题定制', link: '/guide/theme' }
        ]
      }
    ]
  }
})
