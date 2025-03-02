# Project Structure

The Web Starter Shell is organized as a monorepo using Turborepo. This structure allows for efficient code sharing and development across multiple applications and packages.

## Root Directory

```
web-starter-shell/
├── apps/               # Applications
├── packages/           # Shared packages
├── .env                # Environment variables
├── .env.example        # Example environment variables
├── .gitignore          # Git ignore file
├── bun.lock            # Bun lockfile
├── package.json        # Root package.json
├── README.md           # Root README
└── turbo.json          # Turborepo configuration
```

## Applications (`apps/`)

The `apps/` directory contains all the applications in the monorepo:

```
apps/
├── docs/               # Documentation site (VitePress)
└── web/                # Main web application (Next.js)
```

### Web Application (`apps/web/`)

The main web application is built with Next.js 15 using the App Router:

```
apps/web/
├── app/                # Next.js App Router
│   ├── api/            # API routes
│   ├── (routes)/       # Application routes
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── atoms/          # Basic building blocks
│   ├── molecules/      # Combinations of atoms
│   ├── organisms/      # Complex UI components
│   ├── templates/      # Page-level layouts
│   └── pages/          # Complete page components
├── lib/                # Utility functions
├── public/             # Static assets
├── styles/             # Global styles
├── next.config.js      # Next.js configuration
└── package.json        # Package configuration
```

### Documentation (`apps/docs/`)

The documentation site is built with VitePress:

```
apps/docs/
├── .vitepress/         # VitePress configuration
├── docs/               # Documentation content
│   ├── api/            # API documentation
│   └── guide/          # Guide documentation
├── public/             # Static assets
└── package.json        # Package configuration
```

## Shared Packages (`packages/`)

The `packages/` directory contains shared code that can be used across applications:

```
packages/
├── api-client/         # Type-safe API client
├── eslint-config/      # Shared ESLint configuration
├── hooks/              # Reusable React hooks
├── tailwind-config/    # Shared Tailwind configuration
├── test-config/        # Shared test configuration
├── theme/              # Shared theme configuration
├── types/              # Shared TypeScript types
├── typescript-config/  # Shared TypeScript configuration
├── ui/                 # Shared UI components
└── utils/              # Shared utility functions
```

## Package Details

### `@repo/api-client`

Type-safe API client for backend communication.

### `@repo/eslint-config`

Shared ESLint configuration for consistent code style.

### `@repo/hooks`

Reusable React hooks for common UI functionalities.

### `@repo/tailwind-config`

Shared Tailwind CSS configuration with DaisyUI integration.

### `@repo/test-config`

Standardized Jest configuration for testing.

### `@repo/theme`

Shared theme configuration for consistent styling.

### `@repo/types`

Common TypeScript type definitions.

### `@repo/typescript-config`

Shared TypeScript configuration.

### `@repo/ui`

Shared UI components built with React and Tailwind CSS.

### `@repo/utils`

Common utility functions for string manipulation, date handling, validation, and formatting. 