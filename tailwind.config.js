const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#0A083A',
      secondary: '#FFFFFF',
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
      orange: '#FE7831',
      magenta: '#FF3C78',
      grey: {
        500: '#888787',
        400: '#A4A4A3',
        300: '#C1C0C0',
        100: '#F5F5F5',
        200: '#EBEBEA',
      },
      'ultra-marine-blue': '#315BFF',
      'forest-green': '#02BE83',
      'granite-gray': '#6C6B6B',
      'text-error': '#FF3C79',
    },
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
      xl: '1440px',
      '2xl': '1536px',
    },
    fontSize: {
      xs: '0.625rem',
      sm: '0.75rem',
      md: '0.875rem',
      base: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '2.5rem',
      '3xl': '3rem',
      '4xl': '3.5rem',
      '5xl': '4.5rem',
    },
    borderColor: {
      light: '#dddddd',
      DEFAULT: '#CCCCCC',
    },
    shadow: {
      shadow: '0px 40px 80px rgba(138, 168, 248, 0.25)',
      'shadow-2': '0px 25px 50px rgba(23, 44, 130, 0.4)',
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('children', '& > *');
    },
  ],
};
