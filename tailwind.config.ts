// tailwind.config.ts (or tailwind.config.js if you prefer JS)
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"], // Required for Shadcn dark mode
  content: [
    "./pages/**/*.{ts,tsx}", // Include if using Pages Router
    "./components/**/*.{ts,tsx}", // Include components outside src if any
    "./app/**/*.{ts,tsx}", // Include App Router
    "./src/**/*.{ts,tsx}", // Include everything in src
  ],
  prefix: "", // Optional prefix for Tailwind classes
  theme: {
     container: {
       center: true, // <-- Centers the container
       padding: "2rem", // <-- Default horizontal padding (adjust as needed)
       screens: {
         // Optional: Define max-widths for breakpoints
         sm: "640px",
         md: "768px",
         lg: "1024px",
         xl: "1280px",
         "2xl": "1920px", // <-- Max width the container will reach
       },
     },
    extend: {
      fontFamily: {
        // Ensure this matches the variable in layout.tsx
        sans: ["var(--font-sans)", "sans-serif"],
      },
      colors: {
        // Shadcn color definitions (automatically added by `npx shadcn-ui init`)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        // Shadcn border radius definitions
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        // Shadcn animation definitions
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        // Shadcn animation definitions
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Required for Shadcn animations
} satisfies Config;

// Use `module.exports = config` if using a .js file
export default config;
