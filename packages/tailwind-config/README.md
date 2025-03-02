# @repo/tailwind-config

> Shared Tailwind CSS configuration for the monorepo

This package contains the shared Tailwind CSS configuration used across the monorepo, including theme settings and DaisyUI integration.

## Usage

```js
// tailwind.config.js
const sharedConfig = require("@repo/tailwind-config");

module.exports = {
  // Use the shared config as a base
  ...sharedConfig,
  // Override or extend as needed
  content: [
    ...sharedConfig.content,
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};
```

## Features

- OKLCH color space for modern color representation
- DaisyUI integration with custom theme
- Light and dark mode support
- Consistent color palette across applications