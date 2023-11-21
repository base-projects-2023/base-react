import buttons from './src/theme/buttons';

import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gap: {
        unset: 'unset',
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        '*': { fontFamily: theme('fontFamily.roboto') },
        h1: { fontSize: theme('fontSize.4xl') },
        h2: { fontSize: theme('fontSize.xl') },
      });
    }),
    buttons,
  ],
  corePlugins: {
    invert: true,
  },
  darkMode: 'class',
};
