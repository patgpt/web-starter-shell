# @repo/api-client

> Type-safe API client for backend communication

This package provides a typed API client for making requests to the backend with full TypeScript support.

## Usage

```typescript
import { ApiClient } from '@repo/api-client';

// Initialize the client
const apiClient = new ApiClient('https://api.example.com');

// Make type-safe API calls
async function fetchUser(userId: string) {
  const response = await apiClient.getUser(userId);
  console.log(response.data.name); // Type-safe access to user properties
  return response.data;
}

// Custom endpoints
async function customRequest<T>() {
  return apiClient.get<T>('/custom-endpoint');
}
```

## API Reference

### `ApiClient`

The main class for API interaction.

#### Methods

| Method | Description |
|--------|-------------|
| `constructor(baseUrl: string)` | Create a new API client instance |
| `get<T>(endpoint: string)` | Make a GET request to the specified endpoint |
| `post<T, U>(endpoint: string, data: U)` | Make a POST request with data |
| `getUser(userId: string)` | Get a user by ID (returns typed response) |
| `getProducts()` | Get all products (returns typed response) | 