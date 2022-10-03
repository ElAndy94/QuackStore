const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      minWidth: {
        ...defaultTheme.minWidth,
        'tablet-container': '29.5rem',
        'desktop-container': '40.5rem',
        'tablet-page': '45rem',
        'desktop-page': '82.5rem',
      },
      maxWidth: {
        ...defaultTheme.maxWidth,
        'tablet-container': '29.5rem',
        'desktop-container': '40.5rem',
        'tablet-page': '45rem',
        'desktop-page': '82.5rem',
      },
      screens: {
        xs: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1344px',
        '2xl': '1536px',
      },
      fontSize: {
        xs: '0.625rem',
        sm: '0.75rem',
        md: '0.875rem',
        base: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
      },
    },
  },
  plugins: [],
};
