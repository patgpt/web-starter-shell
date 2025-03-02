/**
 * Hook for responsive design using media queries
 * @packageDocumentation
 */
import { useEffect, useState } from 'react';

/**
 * Hook to detect if a media query matches
 * @param query - CSS media query string
 * @returns Boolean indicating if the media query matches
 * 
 * @example
 * ```tsx
 * const isDesktop = useMediaQuery('(min-width: 1024px)');
 * 
 * return (
 *   <div>
 *     {isDesktop ? <DesktopView /> : <MobileView />}
 *   </div>
 * );
 * ```
 */
export function useMediaQuery(query: string): boolean {
  // Initialize with null to avoid hydration mismatch
  const [matches, setMatches] = useState<boolean>(false);
  
  useEffect(() => {
    // Avoid running on SSR
    if (typeof window === 'undefined') {
      return;
    }
    
    const mediaQuery = window.matchMedia(query);
    
    // Initial check
    setMatches(mediaQuery.matches);
    
    // Listen for changes
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    } 
    // Legacy support for Safari < 14, IE and older browsers
    else {
      mediaQuery.addListener(listener);
      return () => mediaQuery.removeListener(listener);
    }
  }, [query]);

  return matches;
} 