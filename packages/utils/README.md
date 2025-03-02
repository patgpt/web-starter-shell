# @repo/utils

> Common utility functions for the project

This package contains utility functions for string manipulation, date handling, validation, and formatting that are used across the monorepo.

## Usage

```typescript
import { capitalize, formatDate, isValidEmail, formatCurrency } from '@repo/utils';

// String utilities
const capitalized = capitalize('hello'); // "Hello"
const kebabCase = toKebabCase('helloWorld'); // "hello-world"

// Date utilities
const formattedDate = formatDate(new Date(), 'YYYY-MM-DD'); // "2023-07-15"
const daysAgo = getRelativeTimeString(new Date(Date.now() - 86400000)); // "1 day ago"

// Validation
const isValid = isValidEmail('user@example.com'); // true
const isEmpty = isEmpty(''); // true

// Formatting
const currency = formatCurrency(1234.56); // "$1,234.56"
const fileSize = formatFileSize(1024 * 1024); // "1 MB"
```

## API Reference

### String Utilities

- `capitalize(str: string)`: Capitalize the first letter of a string
- `truncate(str: string, length: number, suffix?: string)`: Truncate a string with ellipsis
- `toKebabCase(str: string)`: Convert a string to kebab-case
- `toCamelCase(str: string)`: Convert a string to camelCase

### Date Utilities

- `formatDate(date: Date, format?: string)`: Format a date with a specified format
- `getDaysDifference(date1: Date, date2?: Date)`: Get days between two dates
- `isPastDate(date: Date)`: Check if a date is in the past
- `addDays(date: Date, days: number)`: Add days to a date
- `getRelativeTimeString(date: Date)`: Get a human-readable relative time string

### Validation Utilities

- `isValidEmail(email: string)`: Check if a string is a valid email
- `isValidUrl(url: string)`: Check if a string is a valid URL
- `isValidPassword(password: string)`: Check if a string is a valid password
- `isEmpty(value: unknown)`: Check if a value is empty

### Formatting Utilities

- `formatCurrency(value: number, currency?: string, locale?: string)`: Format a number as currency
- `formatNumber(value: number, decimalPlaces?: number, locale?: string)`: Format a number with thousands separators
- `formatFileSize(bytes: number, decimals?: number)`: Format bytes to human-readable file size 