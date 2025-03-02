import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Web Starter Shell",
  description: "Documentation for the Web Starter Shell monorepo",
  // Ignore dead links during build
  ignoreDeadLinks: true,
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Project Structure', link: '/guide/project-structure' },
          ]
        },
        {
          text: 'Development',
          items: [
            { text: 'Components', link: '/guide/components' },
            { text: 'Styling', link: '/guide/styling' },
            { text: 'Data Fetching', link: '/guide/data-fetching' },
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Overview', link: '/api/' },
            { text: 'Hooks', link: '/api/hooks' },
            { text: 'Utilities', link: '/api/utilities' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/web-starter-shell' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024'
    }
  }
}) 