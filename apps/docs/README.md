# Web Starter Shell Documentation

This is the documentation site for the Web Starter Shell, built with [VitePress](https://vitepress.dev/).

## Development

```bash
# Install dependencies
bun install

# Start development server
bun run dev
```

The development server will start at [http://localhost:5173](http://localhost:5173).

## Building

```bash
# Build the documentation site
bun run build
```

The built site will be in the `.vitepress/dist` directory.

## Preview

```bash
# Preview the built site
bun run preview
```

## Structure

- `.vitepress/`: VitePress configuration
- `docs/`: Documentation content
  - `guide/`: User guides
  - `api/`: API reference
- `public/`: Static assets

## Adding Content

1. Create a new Markdown file in the appropriate directory
2. Add the file to the sidebar in `.vitepress/config.ts`
3. Link to the file from other pages

## Markdown Features

VitePress supports all standard Markdown features, as well as:

- Frontmatter for page metadata
- Code syntax highlighting
- Custom containers
- Table of contents
- And more!

For more information, see the [VitePress documentation](https://vitepress.dev/guide/markdown).
