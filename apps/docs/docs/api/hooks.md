# Hooks

The `@repo/hooks` package provides a collection of reusable React hooks for common UI functionalities.

## useMediaQuery

A hook for detecting media query matches.

```typescript
import { useMediaQuery } from '@repo/hooks';

function Component() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  
  return (
    <div>
      {isDesktop ? 'Desktop View' : 'Mobile View'}
    </div>
  );
}
```

## useLocalStorage

A hook for persisting state in localStorage.

```typescript
import { useLocalStorage } from '@repo/hooks';

function Component() {
  const [value, setValue] = useLocalStorage('key', 'default value');
  
  return (
    <div>
      <p>Current value: {value}</p>
      <button onClick={() => setValue('new value')}>Update Value</button>
    </div>
  );
}
```

## useDebounce

A hook for debouncing a value.

```typescript
import { useDebounce } from '@repo/hooks';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  
  useEffect(() => {
    // This effect will only run when debouncedSearchTerm changes
    // after the specified delay (500ms)
    if (debouncedSearchTerm) {
      searchAPI(debouncedSearchTerm);
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

## useClickOutside

A hook for detecting clicks outside of a specified element.

```typescript
import { useClickOutside } from '@repo/hooks';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  useClickOutside(dropdownRef, () => {
    if (isOpen) setIsOpen(false);
  });
  
  return (
    <div ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Dropdown</button>
      {isOpen && (
        <div className="dropdown-content">
          <p>Dropdown content</p>
        </div>
      )}
    </div>
  );
}
```

## useTheme

A hook for managing theme (light/dark mode).

```typescript
import { useTheme } from '@repo/hooks';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
}
``` 