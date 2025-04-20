/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["selector", '[data-theme="light"]'],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: '#121212', // <- mais neutro e escuro
        foreground: '#c0caf5',
        primary: '#ff9e64',
        secondary: '#e0af68',
        accent: '#f7768e',
        muted:'#ffffff' //'#565f89',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

