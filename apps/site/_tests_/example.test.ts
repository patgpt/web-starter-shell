/**
 * Example Test File
 * 
 * This file demonstrates how to write tests using Bun's test runner.
 * @see https://bun.sh/docs/cli/test
 */

// @ts-ignore - Bun types will be available at runtime
import { describe, expect, mock, test } from "bun:test";

// Simple test
test("example test", () => {
  expect(1 + 1).toBe(2);
});

// Test group with multiple assertions
describe("Math operations", () => {
  test("addition works", () => {
    expect(1 + 1).toBe(2);
    expect(5 + 7).toBe(12);
  });

  test("subtraction works", () => {
    expect(5 - 3).toBe(2);
    expect(10 - 5).toBe(5);
  });

  test("multiplication works", () => {
    expect(2 * 3).toBe(6);
    expect(5 * 5).toBe(25);
  });
});

// Async test example
test("async operations", async () => {
  const result = await Promise.resolve(42);
  expect(result).toBe(42);
});

// Using the global mock response utility defined in setup.ts
test("mock response utility works", () => {
  // @ts-ignore - Global utility from setup.ts
  const mockRes = createMockResponse(200, { success: true });
  expect(mockRes.status).toBe(200);
  expect(mockRes.headers.get("Content-Type")).toBe("application/json");
});

// Test with mock function
test("mock functions", () => {
  // Create a mock function
  const mockFn = mock(() => "original");
  
  // Call the mock function
  const result = mockFn();
  
  // Verify calls
  expect(mockFn).toHaveBeenCalled();
  expect(result).toBe("original");
  
  // Change implementation
  mockFn.mockImplementation(() => "mocked");
  expect(mockFn()).toBe("mocked");
});

// Skip a test
test.skip("skipped test", () => {
  // This test will be skipped
  expect(true).toBe(false);
});

// Run only these tests (comment out when running all tests)
// test.only("only this test runs", () => {
//   expect(true).toBe(true);
// });

// Test with timeout
test("test with timeout", () => {
  // This test will fail if it takes longer than 1000ms
}, 1000);

// Test expected errors
test("throws an error", () => {
  expect(() => {
    throw new Error("Test error");
  }).toThrow("Test error");
}); 