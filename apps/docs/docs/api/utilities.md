# Utilities

The `@repo/utils` package provides a collection of utility functions for common tasks like string manipulation, date handling, validation, and formatting.

## String Utilities

### `formatString`

Formats a string with provided values.

```typescript
import { formatString } from '@repo/utils';

const result = formatString('Hello, {name}!', { name: 'World' });
// result: 'Hello, World!'
```

### `truncate`

Truncates a string to a specified length and adds an ellipsis.

```typescript
import { truncate } from '@repo/utils';

const result = truncate('This is a long string that needs to be truncated', 20);
// result: 'This is a long stri...'
```

### `slugify`

Converts a string to a URL-friendly slug.

```typescript
import { slugify } from '@repo/utils';

const result = slugify('Hello World! This is a test');
// result: 'hello-world-this-is-a-test'
```

## Date Utilities

### `formatDate`

Formats a date using the specified format.

```typescript
import { formatDate } from '@repo/utils';

const date = new Date('2023-01-01T12:00:00Z');
const result = formatDate(date, 'YYYY-MM-DD');
// result: '2023-01-01'
```

### `relativeTime`

Returns a relative time string (e.g., "5 minutes ago").

```typescript
import { relativeTime } from '@repo/utils';

const date = new Date(Date.now() - 5 * 60 * 1000); // 5 minutes ago
const result = relativeTime(date);
// result: '5 minutes ago'
```

## Validation Utilities

### `isEmail`

Validates if a string is a valid email address.

```typescript
import { isEmail } from '@repo/utils';

const result = isEmail('user@example.com');
// result: true
```

### `isURL`

Validates if a string is a valid URL.

```typescript
import { isURL } from '@repo/utils';

const result = isURL('https://example.com');
// result: true
```

## Number Utilities

### `formatNumber`

Formats a number with specified options.

```typescript
import { formatNumber } from '@repo/utils';

const result = formatNumber(1234.56, { decimals: 2, separator: ',' });
// result: '1,234.56'
```

### `formatCurrency`

Formats a number as currency.

```typescript
import { formatCurrency } from '@repo/utils';

const result = formatCurrency(1234.56, 'USD');
// result: '$1,234.56'
```

## Object Utilities

### `deepMerge`

Deeply merges two objects.

```typescript
import { deepMerge } from '@repo/utils';

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };
const result = deepMerge(obj1, obj2);
// result: { a: 1, b: { c: 2, d: 3 }, e: 4 }
```

### `pick`

Creates an object with only the specified properties.

```typescript
import { pick } from '@repo/utils';

const obj = { a: 1, b: 2, c: 3, d: 4 };
const result = pick(obj, ['a', 'c']);
// result: { a: 1, c: 3 }
``` 