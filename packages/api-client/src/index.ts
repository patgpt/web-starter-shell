/**
 * API client for making requests to the backend
 * @packageDocumentation
 */

import type { ApiResponse, GetProductsResponse, GetUserResponse, Product, User } from '@repo/types';

/**
 * Base API client class
 * @description Handles API requests with type safety
 */
export class ApiClient {
  private baseUrl: string;

  /**
   * Create a new API client
   * @param baseUrl - The base URL for API requests
   */
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  /**
   * Make a GET request to the API
   * @param endpoint - API endpoint to call
   * @returns Typed API response
   */
  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    const response = await fetch(`${this.baseUrl}${endpoint}`);
    return response.json() as Promise<ApiResponse<T>>;
  }

  /**
   * Make a POST request to the API
   * @param endpoint - API endpoint to call
   * @param data - Data to send in the request body
   * @returns Typed API response
   */
  async post<T, U>(endpoint: string, data: U): Promise<ApiResponse<T>> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json() as Promise<ApiResponse<T>>;
  }

  /**
   * Get user by ID
   * @param userId - The user ID to fetch
   * @returns User data with type safety
   */
  async getUser(userId: string): Promise<GetUserResponse> {
    return this.get<User>(`/users/${userId}`);
  }

  /**
   * Get products
   * @returns List of products with type safety
   */
  async getProducts(): Promise<GetProductsResponse> {
    return this.get<Product[]>('/products');
  }
}

export default ApiClient; 