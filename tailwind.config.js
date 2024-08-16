/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#FFFFFF', // Example custom color
      primary: '#3490dc', // Example custom color
      primaryBlack: '#222121', // Example custom color
      danger: '#e3342f', // Example custom color
      secondaryBlack: '#171717', // Custom alias for black
      bgBlack: '#131313' // Custom alias for dark gray
    },
    extend: {
      dropShadow: {
        custom: '0 4px 4px rgba(0, 0, 0, 0.25)', // Custom drop shadow
        'custom-lg': '0 10px 8px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.06)' // Larger custom drop shadow
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.primaryStroke': {
          position: 'relative'
        },
        '.primaryStroke::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
          boxSizing: 'border-box',
          border: '2px solid #222121',
          pointerEvents: 'none',
          borderRadius: 'inherit' // Ensures that the pseudo-element inherits the border radius
        }
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    })
  ]
}
