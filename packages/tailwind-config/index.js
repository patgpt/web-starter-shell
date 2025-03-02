/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "oklch(var(--color-primary))",
        secondary: "oklch(var(--color-secondary))",
        accent: "oklch(var(--color-accent))",
        neutral: "oklch(var(--color-neutral))",
        "base-100": "oklch(var(--color-base-100))",
        info: "oklch(var(--color-info))",
        success: "oklch(var(--color-success))",
        warning: "oklch(var(--color-warning))",
        error: "oklch(var(--color-error))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "color-primary": "0.72 0.11 178",
          "color-secondary": "0.65 0.15 320",
          "color-accent": "0.85 0.20 120",
          "color-neutral": "0.30 0.01 240",
          "color-base-100": "0.98 0.01 240",
          "color-info": "0.70 0.15 220",
          "color-success": "0.75 0.15 140",
          "color-warning": "0.85 0.15 80",
          "color-error": "0.75 0.15 30",
        },
        dark: {
          "color-primary": "0.72 0.11 178",
          "color-secondary": "0.65 0.15 320",
          "color-accent": "0.85 0.20 120",
          "color-neutral": "0.30 0.01 240",
          "color-base-100": "0.15 0.01 240",
          "color-info": "0.70 0.15 220",
          "color-success": "0.75 0.15 140",
          "color-warning": "0.85 0.15 80",
          "color-error": "0.75 0.15 30",
        },
      },
    ],
  },
}; 