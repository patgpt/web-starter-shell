/**
 * Hook for detecting clicks outside a component
 * @packageDocumentation
 */
import { RefObject, useEffect } from 'react';

/**
 * Hook to detect clicks outside of a specified element
 * @param ref - React ref object for the element to monitor
 * @param handler - Callback function to call when a click outside occurs
 * 
 * @example
 * ```tsx
 * const dropdownRef = useRef(null);
 * const [isOpen, setIsOpen] = useState(false);
 * 
 * useOnClickOutside(dropdownRef, () => {
 *   if (isOpen) setIsOpen(false);
 * });
 * 
 * return (
 *   <div ref={dropdownRef}>
 *     <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
 *     {isOpen && <div>Dropdown content</div>}
 *   </div>
 * );
 * ```
 */
export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void
): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
} 