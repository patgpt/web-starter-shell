// Custom theme components and overrides
import { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

// You can extend the default theme here
export default {
  ...DefaultTheme,
  enhanceApp({ app, router }) {
    // Register custom components if needed
    // app.component('MyCustomComponent', MyCustomComponent)
    
    // Added for debugging
    if (typeof window !== 'undefined') {
      window.addEventListener('DOMContentLoaded', () => {
        console.log('VitePress theme loaded successfully');
      });
    }
  }
} satisfies Theme 