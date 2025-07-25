/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
import { colors } from './src/styles/colors';

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}', '../../packages/ui/src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;

export default config;
