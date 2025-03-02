# @repo/theme

> Shared theme configuration for consistent styling across the monorepo

This package provides theme configuration, color palettes, and styling utilities that can be shared across the monorepo to ensure consistent design.

## Usage

```typescript
import { lightTheme, darkTheme, getTheme } from '@repo/theme';

// Use the light theme
const theme = lightTheme;

// Or get theme based on user preference
const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme = getTheme(userPrefersDark);

// Access theme properties
const primaryColor = theme.colors.primary;
```

## Features

- Light and dark theme configurations
- OKLCH color space for modern color representation
- Consistent spacing, font sizes, and border radius scales
- Shadow definitions
- Helper functions for theme management

## API Reference

### Theme Objects

- `lightTheme`: Default light theme configuration
- `darkTheme`: Default dark theme configuration

### Color Palettes

- `lightColors`: Light theme color palette
- `darkColors`: Dark theme color palette

### Design Tokens

- `fontSizes`: Typography scale
- `spacing`: Spacing scale
- `borderRadius`: Border radius scale
- `shadows`: Shadow definitions

### Helper Functions

- `getTheme(isDarkMode: boolean)`: Get theme based on dark mode preference 