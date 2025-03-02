# Components

This guide provides an overview of the components available in the Web Starter Shell and how to use them effectively.

## Component Structure

The Web Starter Shell follows the Atomic Design methodology for organizing components:

- **Atoms**: Basic building blocks like buttons, inputs, and icons
- **Molecules**: Combinations of atoms that form more complex UI elements
- **Organisms**: Complex UI components that combine multiple molecules and atoms
- **Templates**: Page-level layouts that arrange organisms, molecules, and atoms
- **Pages**: Complete page components that implement templates with actual content

## Using Shared UI Components

The `@repo/ui` package contains shared UI components that can be used across all applications in the monorepo.

### Button Component

```tsx
import { Button } from '@repo/ui';

function MyComponent() {
  return (
    <Button variant="primary" size="md" onClick={() => console.log('Clicked!')}>
      Click Me
    </Button>
  );
}
```

### Available Button Variants

- `primary`: Main call-to-action buttons
- `secondary`: Secondary actions
- `outline`: Less prominent actions
- `ghost`: Minimal visual impact for tertiary actions
- `link`: Button that looks like a link
- `danger`: Destructive actions

### Available Sizes

- `sm`: Small buttons
- `md`: Medium buttons (default)
- `lg`: Large buttons

## Creating Custom Components

When creating new components, follow these guidelines:

1. **Server Components by Default**: Use React Server Components unless client-side interactivity is required.
2. **Accessible**: Ensure all components are accessible with proper ARIA attributes.
3. **Typed Props**: Use TypeScript interfaces for component props.
4. **Documentation**: Include JSDoc comments for all components and props.

Example of a well-structured component:

```tsx
import { cn } from '@/utils/cn';
import type { ButtonHTMLAttributes } from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Custom className to apply to the card
   */
  className?: string;
  /**
   * Whether the card should have a hover effect
   */
  hoverable?: boolean;
}

/**
 * Card component for displaying content in a contained area
 */
export function Card({
  className,
  hoverable = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg bg-card p-6 shadow-sm',
        hoverable && 'transition-shadow hover:shadow-md',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
```

## Testing Components

All components should have tests to ensure they work as expected. Use the testing utilities from `@repo/test-config`.

```tsx
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('renders children correctly', () => {
    render(<Card>Test Content</Card>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Card className="test-class">Test Content</Card>);
    expect(screen.getByText('Test Content').parentElement).toHaveClass('test-class');
  });
});
``` 