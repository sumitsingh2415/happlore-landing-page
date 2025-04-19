module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          'indigo': '#4c51bf',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  