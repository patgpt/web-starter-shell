# @repo/hooks

A collection of reusable React hooks for common UI functionalities and state management across the monorepo.

## Installation

This package is part of a monorepo and is not published separately. It's available for internal use across the repository.

## Usage

### useLocalStorage

A hook to persist state in localStorage.

```tsx
import { useLocalStorage } from '@repo/hooks';

function ThemeToggler() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
}
```

### useMediaQuery

A hook for responsive design using media queries.

```tsx
import { useMediaQuery } from '@repo/hooks';

function ResponsiveComponent() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <div>
      {isMobile ? <MobileView /> : <DesktopView />}
    </div>
  );
}
```

### useDebounce

A hook to debounce rapidly changing values.

```tsx
import { useDebounce } from '@repo/hooks';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  
  useEffect(() => {
    if (debouncedSearchTerm) {
      performSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);
  
  return (
    <input 
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}
```

### useFetch

A hook for data fetching with loading and error states.

```tsx
import { useFetch } from '@repo/hooks';

function UserProfile({ userId }) {
  const { data, loading, error } = useFetch(`/api/users/${userId}`);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
    </div>
  );
}
```

### useOnClickOutside

A hook to detect clicks outside of a specified element.

```tsx
import { useRef, useState } from 'react';
import { useOnClickOutside } from '@repo/hooks';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  useOnClickOutside(dropdownRef, () => {
    if (isOpen) setIsOpen(false);
  });
  
  return (
    <div ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Menu</button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
    </div>
  );
}
```

## API Reference

### useLocalStorage(key, initialValue)

- `key`: String - The key to use in localStorage
- `initialValue`: Any - The initial value to use if no value is found in localStorage
- Returns: [value, setValue] - A tuple with the current value and a setter function

### useMediaQuery(query)

- `query`: String - CSS media query string
- Returns: Boolean - Whether the media query matches

### useDebounce(value, delay)

- `value`: Any - The value to debounce
- `delay`: Number - The delay in milliseconds
- Returns: Any - The debounced value

### useFetch(url, options)

- `url`: String - The URL to fetch data from
- `options`: Object (optional) - Fetch options
- Returns: Object - { data, loading, error }

### useOnClickOutside(ref, handler)

- `ref`: RefObject - React ref for the element to monitor
- `handler`: Function - Callback function to call when a click outside occurs
- Returns: void 