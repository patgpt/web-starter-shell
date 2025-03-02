/**
 * YellowDog Web Starter Theme Configuration
 * An opinionated web starter theme with modern tooling and best practices
 * @author PatGPT
 */

const themeConfig = {
  /**
   * Theme metadata and branding information
   */
  meta: {
    name: "YellowDog Web Starter",
    description: "An opinionated web starter theme with modern tech stack",
    version: "1.0.0",
    author: {
      name: "PatGPT",
      email: "hey@yellowdog.digital",
      website: "https://yellowdog.digital",
      github: "https://github.com/patgpt",
      twitter: "https://x.com/patgpt"
    },
    license: "MIT",
  },

  /**
   * Build and development configuration
   */
  build: {
    packageManager: "bun",
    commands: {
      dev: "bun run dev",
      build: "bun run build",
      start: "bun run start",
      lint: "bun run lint",
      test: "bun run test"
    }
  },

  /**
   * Core technologies and dependencies
   */
  tech: {
    framework: "Next.js",
    language: "TypeScript",
    styling: {
      framework: "Tailwind CSS",
      version: "4.0",
      plugins: ["daisyui"]
    },
    preferredComponents: "Server Components",
    documentation: "TSDoc",
  },

  /**
   * Default project structure
   */
  structure: {
    app: {
      layout: "app/layout.tsx",
      page: "app/page.tsx",
      components: "app/components/",
      lib: "app/lib/",
      hooks: "app/hooks/",
      styles: "app/styles/",
      public: "public/",
    }
  },

  /**
   * Theme configuration options
   */
  theme: {
    colors: {
      primary: "#FFC700", // Yellow for YellowDog brand
      secondary: "#333333",
      accent: "#FF6B00",
      background: "#FFFFFF",
      text: "#333333",
    },
    fonts: {
      heading: "Inter, sans-serif",
      body: "Inter, sans-serif",
    },
    borderRadius: {
      default: "0.5rem",
      buttons: "0.25rem",
    },
  },

  /**
   * Default configurations for included tools
   */
  tools: {
    eslint: {
      extends: [
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended",
      ],
    },
    prettier: {
      semi: true,
      singleQuote: true,
      tabWidth: 2,
    },
  },

  /**
   * Default SEO configuration
   */
  seo: {
    defaultTitle: "YellowDog Web Starter",
    titleTemplate: "%s | YellowDog Digital",
    defaultDescription: "Modern web development starter by YellowDog Digital",
    defaultOGImage: "/images/og-image.jpg",
    twitter: {
      handle: "@patgpt",
      cardType: "summary_large_image",
    },
  },
};

export default themeConfig; 