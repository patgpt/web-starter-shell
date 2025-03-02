/// <reference types="vitepress/client" />

declare module '*.vue' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}

// Add additional custom type declarations if needed 