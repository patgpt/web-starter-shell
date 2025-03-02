# API Reference

This section provides detailed documentation for the shared packages and APIs available in the Web Starter Shell.

## Available Packages

The Web Starter Shell includes several shared packages that can be used across your applications:

- [Hooks](/api/hooks): Reusable React hooks for common UI functionalities
- [Utilities](/api/utilities): Common utility functions for string manipulation, date handling, validation, and formatting

## API Client

The `@repo/api-client` package provides a type-safe way to interact with your backend APIs. It's built with TypeScript and provides automatic type inference for your API responses.

### Basic Usage

```typescript
import { apiClient } from '@repo/api-client';

// Fetch data from an API endpoint
const data = await apiClient.get('/api/users');

// Post data to an API endpoint
const response = await apiClient.post('/api/users', {
  name: 'John Doe',
  email: 'john@example.com',
});
```

## Database Access

The Web Starter Shell uses Drizzle ORM for type-safe database access. Here's a basic example of how to use it:

```typescript
import { db } from '@/db/drizzle';
import { users } from '@/db/schema';

// Query the database
const allUsers = await db.select().from(users);

// Insert a new user
const newUser = await db.insert(users).values({
  name: 'John Doe',
  email: 'john@example.com',
}).returning();
```

For more detailed information about specific packages, please refer to the individual package documentation pages. 