const { preset } = require('./preset');

module.exports = {
  content: ['./src/**/*.{njk,md}'],
  presets: [preset],
  theme: {
    fontFamily: {
      'primary': ['Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      'secondary': ['Londrina Solid', 'Roboto Condensed', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
    },
    extend: {
      screens: {
        '3xl': '1600px',
      },
      fontSize: {
        '2xs': '10px'
      },
      gridTemplateColumns: {
        'section': 'var(--gutter) 1fr var(--gutter)',
        'section-slim': 'var(--gutter-slim) 1fr var(--gutter-slim)',
        'nav': 'var(--gutter) repeat(2, 1fr) var(--gutter)',
        'nav-slim': 'var(--gutter-slim) 1fr 2fr var(--gutter-slim)',
      }
    },
  }
}
