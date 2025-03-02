# Styling

This guide provides an overview of the styling approach used in the Web Starter Shell, primarily focusing on TailwindCSS 4 and the design system.

## TailwindCSS 4

The Web Starter Shell uses TailwindCSS 4, which introduces several new features:

- **OKLCH Color Space**: More perceptually uniform colors with better contrast
- **Custom Variants**: New variant syntax with `@custom-variant`
- **Themes**: Support for theming with `@theme` at-rule
- **Simplified Config**: Improved default configuration

### Theme Configuration

The theme is configured using the new `@theme` at-rule in `app.css`:

```css
@import "tailwindcss";

@theme {
  --color-primary: oklch(0.72 0.11 178);
  --color-gray-700: oklch(0.45 0.03 240);
  --font-sans: 'Inter, sans-serif';
  --text-base: 1rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --spacing-6: 1.5rem;
  --rounded-lg: 0.5rem;
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}
```

### Custom Variants

TailwindCSS 4 introduces a new syntax for custom variants:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

This enables using variants like:

```tsx
<div className="text-gray-900 dark:text-white">
  This text is dark in light mode and light in dark mode
</div>
```

## Utility Functions

### `cn` Function

The `cn` utility function combines `tailwind-merge` and `clsx` to handle class name merging and conditional classes:

```tsx
import { cn } from '@/utils/cn';

function Component({ className, disabled }) {
  return (
    <div className={cn(
      'rounded-lg bg-card p-4', // Base classes
      disabled && 'opacity-50 cursor-not-allowed', // Conditional classes
      className // Custom classes that can override defaults
    )}>
      Content
    </div>
  );
}
```

## Component Styling Best Practices

### 1. Use Tailwind Classes

Always prefer Tailwind utility classes over custom CSS:

```tsx
// Good
<div className="flex items-center space-x-4 p-4 bg-card rounded-lg">

// Avoid
<div className="my-custom-class">
```

### 2. Responsive Design

Use Tailwind's responsive prefixes to create responsive layouts:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
```

### 3. DaisyUI Integration

Use DaisyUI components where appropriate:

```tsx
<button className="btn btn-primary">Click Me</button>
```

### 4. Dark Mode Support

Always add dark mode variants for components that have color-specific styling:

```tsx
<div className="bg-white text-gray-900 dark:bg-gray-800 dark:text-white">
```

### 5. Component Creation Pattern

When creating new components that need styling:

1. Start with base Tailwind classes
2. Add conditional classes using the `cn` function
3. Allow for class name overrides via props
4. Add responsive variants where needed
5. Include dark mode variants for color-specific styling

## Design Tokens

The design system is built around the following design tokens, which are defined in the `@repo/theme` package:

### Colors

- `primary`: Main brand color
- `secondary`: Secondary brand color
- `accent`: Accent color for highlights
- `neutral`: Neutral gray for text and backgrounds
- `success`: Positive action color
- `warning`: Warning notification color
- `error`: Error and destructive action color
- `info`: Informational color

### Typography

- `font-sans`: Primary font stack
- `font-mono`: Monospace font for code

### Spacing

A consistent spacing scale following 4px increments is used throughout the application.

### Border Radius

Standard border-radius values are available for maintaining consistent component shapes. 