# Data Fetching

This guide explains the data fetching patterns used in the Web Starter Shell, focusing on best practices with Next.js and Drizzle ORM.

## Next.js Data Fetching

Next.js provides powerful data fetching capabilities, especially with Server Components in the App Router.

### Server Components

Server Components are the default in the App Router and enable efficient data fetching directly on the server:

```tsx
// app/users/page.tsx
import { db } from '@/db/drizzle';
import { users } from '@/db/schema';

export default async function UsersPage() {
  // This runs only on the server
  const allUsers = await db.select().from(users);
  
  // Early return pattern for error handling
  if (!allUsers.length) {
    return <div>No users found</div>;
  }
  
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {allUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

### Dynamic Data with Server Actions

For mutations and form submissions, use Server Actions:

```tsx
// app/actions.ts
'use server';

import { db } from '@/db/drizzle';
import { users } from '@/db/schema';
import { revalidatePath } from 'next/cache';

export async function createUser(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  
  if (!name || !email) {
    return { error: 'Name and email are required' };
  }
  
  try {
    await db.insert(users).values({
      name,
      email,
    });
    
    // Revalidate the users page to show the new user
    revalidatePath('/users');
    return { success: true };
  } catch (error) {
    return { error: 'Failed to create user' };
  }
}
```

And in your component:

```tsx
// app/users/new/page.tsx
import { createUser } from '@/app/actions';

export default function NewUserPage() {
  return (
    <form action={createUser}>
      <input name="name" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <button type="submit">Create User</button>
    </form>
  );
}
```

## Drizzle ORM for Database Access

The Web Starter Shell uses Drizzle ORM with Vercel Postgres for type-safe database access.

### Database Schema

Database schemas are defined in `db/schema.ts`:

```typescript
// db/schema.ts
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
```

### Database Client

The database client is configured in `db/drizzle.ts`:

```typescript
// db/drizzle.ts
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';

export const db = drizzle(sql);
```

### Common Query Patterns

#### Selecting Data

```typescript
// Select all users
const allUsers = await db.select().from(users);

// Select with conditions
const admin = await db.select()
  .from(users)
  .where(eq(users.email, 'admin@example.com'))
  .limit(1);

// Select specific columns
const userEmails = await db.select({ 
  id: users.id, 
  email: users.email 
}).from(users);
```

#### Inserting Data

```typescript
// Insert a single user
const newUser = await db.insert(users)
  .values({
    name: 'John Doe',
    email: 'john@example.com',
  })
  .returning();

// Insert multiple users
await db.insert(users)
  .values([
    { name: 'User 1', email: 'user1@example.com' },
    { name: 'User 2', email: 'user2@example.com' },
  ]);
```

#### Updating Data

```typescript
// Update a user
await db.update(users)
  .set({ name: 'Updated Name' })
  .where(eq(users.id, 1));
```

#### Deleting Data

```typescript
// Delete a user
await db.delete(users)
  .where(eq(users.id, 1));
```

## Type-Safe API Client

The `@repo/api-client` package provides a type-safe way to interact with your API routes:

```typescript
import { apiClient } from '@repo/api-client';

// Get users
const users = await apiClient.get('/api/users');

// Create a user
const newUser = await apiClient.post('/api/users', {
  name: 'John Doe',
  email: 'john@example.com',
});
```

## Best Practices

1. **Server Components First**: Use Server Components for data fetching whenever possible
2. **Type Safety**: Leverage TypeScript and Drizzle ORM for type-safe database operations
3. **Error Handling**: Always handle errors and edge cases (empty results, server errors)
4. **Early Returns**: Use early returns for cleaner code and better error handling
5. **Revalidation**: Use `revalidatePath` or `revalidateTag` to update cached data
6. **Loading States**: Implement loading states for better user experience 