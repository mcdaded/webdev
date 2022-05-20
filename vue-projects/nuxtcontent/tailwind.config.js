module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './assets/css/*.css',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#479385',
          50: '#f6faf9',
          100: '#edf4f3',
          200: '#d1e4e1',
          300: '#b5d4ce',
          400: '#7eb3aa',
          500: '#479385',
          600: '#408478',
          700: '#356e64',
          800: '#2b5850',
          900: '#234841',
        },
        secondary: {
          default: '#212738',
          50: '#f4f4f5',
          100: '#e9e9eb',
          200: '#c8c9cd',
          300: '#a6a9af',
          400: '#646874',
          500: '#212738',
          600: '#1e2332',
          700: '#191d2a',
          800: '#141722',
          900: '#10131b',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
