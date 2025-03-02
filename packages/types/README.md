# @repo/types

> Shared TypeScript type definitions for the project

This package contains TypeScript type definitions that are shared across the monorepo.

## Usage

```typescript
import { User, ApiResponse } from '@repo/types';

// Example usage
const user: User = {
  id: '123',
  name: 'John Doe',
  email: 'john@example.com',
  createdAt: '2023-01-01T00:00:00Z'
};

const response: ApiResponse<User> = {
  data: user,
  status: 200,
  message: 'User retrieved successfully',
  success: true
};
```

## API Reference

### Base Types

- `ApiResponse<T>`: Generic API response wrapper
- `User`: User entity
- `Product`: Product entity
- `ThemeConfig`: Theme configuration
- `ThemeColors`: Theme color palette

### API Endpoint Types

- `GetUserResponse`: Type for user fetch responses
- `GetProductsResponse`: Type for product list responses 