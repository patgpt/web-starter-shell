# Installation

This guide will walk you through the process of setting up the Web Starter Shell on your local machine.

## Prerequisites

Before you begin, make sure you have the following installed:

- [Bun](https://bun.sh/) (v1.2.0 or higher)
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [Git](https://git-scm.com/)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/web-starter-shell.git
cd web-starter-shell
```

### 2. Install Dependencies

```bash
bun install
```

This will install all dependencies for the monorepo, including all packages and applications.

### 3. Set Up Environment Variables

Copy the example environment files:

```bash
cp .env.example .env
```

Edit the `.env` file to include your specific configuration values.

### 4. Start the Development Server

```bash
bun run dev
```

This will start the development servers for all applications in the monorepo. You can access them at:

- Web App: [http://localhost:3000](http://localhost:3000)
- Documentation: [http://localhost:3001](http://localhost:3001)

## Available Scripts

- `bun run build`: Build all applications and packages
- `bun run dev`: Start development servers for all applications
- `bun run lint`: Run linting on all applications and packages
- `bun run format`: Format all code using Prettier
- `bun run check-types`: Run TypeScript type checking
- `bun run clean`: Clean all build artifacts and dependencies

## Next Steps

Now that you have the Web Starter Shell up and running, you can:

1. Explore the [Project Structure](/guide/project-structure) to understand how the monorepo is organized
2. Learn about the [Components](/guide/components) available in the UI package
3. Understand how to use [Styling](/guide/styling) with TailwindCSS 4 