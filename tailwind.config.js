/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Roboto', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      colors: {
        'brandPrimary/100': '#f8d4e5',
        'brandPrimary/200': '#f1aaca',
        'brandPrimary/300': '#eb7fb0',
        'brandPrimary/400': '#e45595',
        'brandPrimary/500': '#dd2a7b',
        'brandPrimary/600': '#b12262',
        'brandPrimary/700': '#85194a',
        'brandPrimary/800': '#581131',
        'brandPrimary/900': '#2c0819',
        'brandSecondary/100': '#fbd9d3',
        'brandSecondary/200': '#f7b3a6',
        'brandSecondary/300': '#f38d7a',
        'brandSecondary/400': '#ef674d',
        'brandSecondary/500': '#eb4121',
        'brandSecondary/600': '#bc341a',
        'brandSecondary/700': '#8d2714',
        'brandSecondary/800': '#5e1a0d',
        'brandSecondary/900': '#2f0d07',
      },
    },
  },
  plugins: [],
};
