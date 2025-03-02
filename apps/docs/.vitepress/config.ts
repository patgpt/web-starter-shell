import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Web Starter Shell",
  description: "Documentation for the Web Starter Shell monorepo",
  // Ignore dead links during build
  ignoreDeadLinks: true,
  // Add proper base path
  base: '/',
  // Dev server options
  vite: {
    server: {
      host: '0.0.0.0',
      cors: true,
      strictPort: false,
      hmr: {
        overlay: true
      }
    },
    // Enable better error reporting
    optimizeDeps: {
      exclude: []
    },
    // Ensure source maps in dev mode
    build: {
      sourcemap: true,
      minify: false,
      cssMinify: false
    },
    // For debugging
    logLevel: 'info'
  },
  // Asset resolution for proper loading
  assetsDir: 'assets',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: 'Contributing', link: '/contributing' },
      { text: 'YellowDog Digital', link: 'https://yellowdog.digital' }
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
      { icon: 'github', link: 'https://github.com/patgpt/web-starter-shell' },
      { icon: 'twitter', link: 'https://twitter.com/AGIManifesto' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/patgpt' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 YellowDog Digital'
    },
    editLink: {
      pattern: 'https://github.com/patgpt/web-starter-shell/edit/main/apps/docs/:path'
    }
  }
}) 