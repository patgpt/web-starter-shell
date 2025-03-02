# @repo/test-config

> Shared Jest configuration for testing across the monorepo

This package provides a standardized Jest configuration for testing React components and utilities across the monorepo.

## Usage

```js
// jest.config.js in your app or package
const baseConfig = require('@repo/test-config');

module.exports = {
  ...baseConfig,
  // Add any app-specific overrides here
};
```

## Features

- Pre-configured for React testing with Jest and Testing Library
- Mocks for Next.js router and navigation hooks
- Mocks for browser APIs like IntersectionObserver and ResizeObserver
- Coverage thresholds and reporting
- Path aliases for cleaner imports

## Included Mocks

- Next.js router and navigation hooks
- IntersectionObserver
- ResizeObserver
- window.matchMedia

## Dependencies

- Jest
- @testing-library/react
- @testing-library/jest-dom
- @testing-library/user-event 