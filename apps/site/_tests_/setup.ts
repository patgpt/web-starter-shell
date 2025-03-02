/**
 * Bun Test Setup
 * This file is automatically loaded before your tests are run.
 * @see https://bun.sh/docs/cli/test
 */

// Use Bun's test module
// @ts-ignore - Bun types will be available at runtime
import { afterAll, afterEach, beforeAll, beforeEach } from "bun:test";

declare global {
  // Extend global namespace with our custom utilities
  var createMockResponse: (status?: number, data?: any, headers?: Record<string, string>) => Response;
}

/**
 * This runs once before all tests
 */
beforeAll(() => {
  // Set up global test environment
  // For example: mock global fetch, set environment variables, etc.
  console.log("Setting up test environment...");
  
  // Set test environment variables using process.env
  // @ts-ignore - We're in a test environment, so overriding NODE_ENV is allowed
  process.env.NODE_ENV = "test";
  process.env.TESTING = "true";
});

/**
 * This runs before each individual test
 */
beforeEach(() => {
  // Reset any state between tests
  // For example: clear mocks, reset document, etc.
});

/**
 * This runs after each individual test
 */
afterEach(() => {
  // Clean up after each test
  // For example: restore mocks, clear localStorage, etc.
});

/**
 * This runs once after all tests are complete
 */
afterAll(() => {
  // Tear down global test environment
  console.log("Test environment teardown complete");
});

/**
 * Custom global test utilities
 */
global.createMockResponse = (status = 200, data = {}, headers = {}) => {
  return new Response(
    JSON.stringify(data),
    {
      status,
      headers: {
        "Content-Type": "application/json",
        ...headers
      }
    }
  );
};

/**
 * Add custom matchers if needed
 */
// Example: Add a custom matcher for testing elements
// expect.extend({
//   toHaveText(received, text) {
//     const pass = received.textContent === text;
//     return {
//       message: () => `expected ${received} to have text ${text}`,
//       pass,
//     };
//   },
// }); 