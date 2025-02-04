/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.html"
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'Rubik': 'Rubik, Helvetica Neue, Helvetica, Arial, sans-serif',
      'Jakarta': 'Plus Jakarta Sans, sans-serif',
      'Inter': 'Inter, sans-serif',
      'Flaticon': 'Flaticon',
      'fontawesome': 'FontAwesome, sans-serif',
    },
    container: {
      center: true,
    },
    extend: {
      screens: {
        'xxl': {
          'min': '1400px',
        },
        'xl': {
          'min': '1200px',
        },
        'lg': {
          'min': '992px',
          'max': '1199.98px'
        },
        'md': {
          'min': '768px',
          'max': '991.98px'
        },
        'sm': {
          'min': '480px',
          'max': '767.98px'
        },
        'xsm': {
          'min': '414px', 
          'max': '479.98px'
        },
      },
    },
  },
  plugins: [
    function ({
    addComponents
  }) {
    addComponents({
      '.container': {
        maxWidth: '100%',
        '@screen sm': {
          maxWidth: '540px',
        },
        '@screen md': {
          maxWidth: '720px',
        },
        '@screen lg': {
          maxWidth: '960px',
        },
        '@screen xl': {
          maxWidth: '1140px',
        },
        '@screen xxl': {
          maxWidth: '1320px',
        },
      }
    })
  }],
}
