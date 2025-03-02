/**
 * Hook for data fetching with loading and error states
 * @packageDocumentation
 */
import { useEffect, useState } from 'react';

/**
 * State returned by the useFetch hook
 */
export interface FetchState<T> {
  /** The fetched data */
  data: T | null;
  /** Loading state */
  loading: boolean;
  /** Error object if the fetch failed */
  error: Error | null;
}

/**
 * Hook for data fetching with built-in loading and error states
 * @param url - The URL to fetch from
 * @param options - Fetch options
 * @returns Object containing data, loading state, and error
 * 
 * @example
 * ```tsx
 * const { data, loading, error } = useFetch<User[]>('/api/users');
 * 
 * if (loading) return <LoadingSpinner />;
 * if (error) return <ErrorMessage message={error.message} />;
 * if (!data) return null;
 * 
 * return (
 *   <ul>
 *     {data.map(user => (
 *       <li key={user.id}>{user.name}</li>
 *     ))}
 *   </ul>
 * );
 * ```
 */
export function useFetch<T = any>(
  url: string,
  options?: RequestInit
): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    // Don't run if no URL
    if (!url) {
      setState({ data: null, loading: false, error: null });
      return;
    }

    let isMounted = true;

    const fetchData = async () => {
      setState(prev => ({ ...prev, loading: true }));

      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (isMounted) {
          setState({ data, loading: false, error: null });
        }
      } catch (error) {
        if (isMounted) {
          setState({ 
            data: null, 
            loading: false, 
            error: error instanceof Error ? error : new Error(String(error)) 
          });
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url, options ? JSON.stringify(options) : null]);

  return state;
} 