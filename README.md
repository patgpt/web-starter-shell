# 🚀 Web Starter Shell

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Drizzle](https://img.shields.io/badge/Drizzle-ORM-18c964?style=for-the-badge&logo=drizzle)](https://orm.drizzle.team/)
[![Bun](https://img.shields.io/badge/Bun-1.2.2-f9f1e1?style=for-the-badge&logo=bun)](https://bun.sh/)
[![Postgres](https://img.shields.io/badge/Postgres-42759B?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com/)

[![Twitter Follow](https://img.shields.io/twitter/follow/AGIManifesto?style=social)](https://twitter.com/AGIManifesto)
[![GitHub stars](https://img.shields.io/github/stars/patgpt/web-starter-shell?style=social)](https://github.com/patgpt/web-starter-shell)

</div>

A comprehensive, modern web development starter kit built as a monorepo using Turborepo, with Next.js 15, TailwindCSS 4, TypeScript, Drizzle ORM, and more.

## ✨ Features

- 📦 **Monorepo Structure** - Efficient code sharing with Turborepo
- 🖥️ **Next.js 15** - Using the App Router and Server Components
- 🎨 **TailwindCSS 4** - With OKLCH color support and custom variants
- 📘 **TypeScript** - Type-safe development experience
- 🗃️ **Drizzle ORM** - Type-safe database queries with Postgres
- ⚡ **Bun** - Fast JavaScript runtime and package manager
- 🚢 **Vercel Integration** - Optimized for deployment on Vercel
- 📚 **VitePress Docs** - Comprehensive documentation

## 📋 What's Inside

### Apps

- `web`: Main [Next.js](https://nextjs.org/) web application
- `docs`: [VitePress](https://vitepress.dev/) documentation site

### Packages

- `@repo/ui`: React component library shared by applications
- `@repo/api-client`: Type-safe API client for backend communication
- `@repo/hooks`: Reusable React hooks for common UI functionalities
- `@repo/utils`: Common utility functions
- `@repo/types`: Shared TypeScript type definitions
- `@repo/eslint-config`: ESLint configurations
- `@repo/typescript-config`: TypeScript configurations
- `@repo/tailwind-config`: Shared Tailwind CSS configuration
- `@repo/test-config`: Standardized test configuration
- `@repo/theme`: Shared theme configuration

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (v1.2.0 or higher)
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)

### Installation

```bash
# Clone the repository
git clone https://github.com/patgpt/web-starter-shell.git
cd web-starter-shell

# Install dependencies
bun install

# Start development servers
bun run dev
```

## 🧩 Available Scripts

- `bun run build` - Build all apps and packages
> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
