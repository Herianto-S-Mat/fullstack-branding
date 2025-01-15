import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: 'media',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    // plugin(function ({ addUtilities }) {
    //   addUtilities({
    //     '.text-shadow': {
    //       'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.5)',
    //     },
    //     '.text-shadow-md': {
    //       'text-shadow': '3px 3px 6px rgba(0, 0, 0, 0.4)',
    //     },
    //     '.text-shadow-lg': {
    //       'text-shadow': '4px 4px 6px rgba(0, 0, 0, 0.3',
    //     },
    //     '.text-shadow-none': {
    //       'text-shadow': 'none',
    //     },
    //   });
    // }),
  ]
} satisfies Config;
