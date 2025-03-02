# YellowDog Web Starter Theme

An opinionated web starter theme with a modern tech stack.

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com/)
[![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)](https://prettier.io/)

## Features

- **[Next.js](https://nextjs.org/docs)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/docs/)** - Static type checking
- **[Tailwind CSS v4](https://tailwindcss.com/docs/)** - Utility-first CSS framework
- **[DaisyUI](https://daisyui.com/docs/install/)** - Component library for Tailwind
- **[Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)** - React Server Components
- **[Bun](https://bun.sh/docs)** - Fast JavaScript runtime & package manager
- **[ESLint](https://eslint.org/docs/latest/)** - Code linting
- **[Prettier](https://prettier.io/docs/en/)** - Code formatting

## Getting Started

```bash
# Clone the repository
git clone https://github.com/patgpt/yellowdog-web-starter.git my-project

# Navigate to the project directory
cd my-project

# Install dependencies
bun install

# Start development server
bun run dev
```

## Tech Stack

| Technology | Version | Documentation |
|------------|---------|---------------|
| Next.js | latest | [Docs](https://nextjs.org/docs) |
| TypeScript | latest | [Docs](https://www.typescriptlang.org/docs/) |
| Tailwind CSS | 4.0.0 | [Docs](https://tailwindcss.com/docs) |
| DaisyUI | latest | [Docs](https://daisyui.com/docs/install/) |
| Bun | 1.2.2+ | [Docs](https://bun.sh/docs) |
| ESLint | latest | [Docs](https://eslint.org/docs/latest/) |
| Prettier | latest | [Docs](https://prettier.io/docs/en/) |

## Commands

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server |
| `bun run build` | Build for production |
| `bun run start` | Start production server |
| `bun run lint` | Run ESLint |
| `bun run format` | Format code with Prettier |
| `bun run test` | Run tests |

## Project Structure

```
├── app/             # Next.js app directory
│   ├── components/  # Shared components
│   ├── lib/         # Utility functions
│   ├── hooks/       # Custom React hooks
│   ├── styles/      # Global styles
│   ├── layout.tsx   # Root layout
│   └── page.tsx     # Home page
├── public/          # Static assets
├── _tests_/         # Test files
│   ├── setup.ts     # Test setup configuration
│   └── *.test.ts    # Test files
├── .editorconfig    # Editor configuration
├── bunfig.toml      # Bun configuration
├── theme.config.js  # Theme configuration
└── package.json     # Project dependencies
```

## Testing

This project uses Bun's built-in test runner. Tests are located in the `_tests_` directory.

```bash
# Run all tests
bun test

# Run tests with coverage
bun test --coverage

# Run specific test file
bun test _tests_/example.test.ts
```

## Configuration Files

- `.editorconfig` - Consistent coding styles across editors
- `bunfig.toml` - Bun configuration
- `theme.config.js` - Theme configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind CSS configuration

## Author

**PatGPT**
- Website: [yellowdog.digital](https://yellowdog.digital)
- GitHub: [@patgpt](https://github.com/patgpt)
- Twitter: [@patgpt](https://x.com/patgpt)
- Email: [hey@yellowdog.digital](mailto:hey@yellowdog.digital)

## License

MIT

---

Made with ❤️ by [YellowDog Digital](https://yellowdog.digital)
