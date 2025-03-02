/**
 * Common TypeScript types used across the application
 * @packageDocumentation
 */

/**
 * Base API response interface
 */
export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
  success: boolean;
}

/**
 * User entity interface
 */
export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

/**
 * Product entity interface
 */
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

// Export type definitions for common API endpoints
export type GetUserResponse = ApiResponse<User>;
export type GetProductsResponse = ApiResponse<Product[]>;

// Theme types
export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  accent: string;
  error: string;
  warning: string;
  success: string;
  info: string;
}

export interface ThemeConfig {
  colors: ThemeColors;
  isDarkMode: boolean;
} 