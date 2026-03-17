// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  // Scan all component and app files for class usage
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // Custom font families matching CSS variable names set in layout.tsx
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "monospace"],
      },
      colors: {
        ink: "#0a0a0a",
        parchment: "#e8e4dc",
        "warm-mid": "#c4bfb4",
        accent: "#d4a853",
        "accent-dim": "#8a6e35",
        surface: "#141414",
        border: "#2a2a2a",
      },
      // Extra animation for more granular stagger control if needed
      animationDelay: {
        "100": "100ms",
        "200": "200ms",
        "300": "300ms",
        "400": "400ms",
        "500": "550ms",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
