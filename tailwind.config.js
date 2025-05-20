/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: '#0a2240',    // Dark Blue/Navy
          dark: '#091d38',       // Darker Blue for hover
          light: '#e6f0f9',      // Light Blue background
        },
        secondary: {
          DEFAULT: '#d4a017',    // Gold/Amber
          dark: '#c49015',       // Darker Gold for hover
        },
        accent: {
          DEFAULT: '#1a7f8c',    // Teal/Turquoise
        },
        
        // Neutral Colors
        neutral: {
          1: '#363A45',
          2: '#505460',
          3: '#868993',
          4: '#BABCC2',
          5: '#D4D5D8',
          6: '#E7E8EA',
          7: '#F3F3F4',
          8: '#FFFFFF',
        },
        
        // Product Tags
        exclusive: {
          DEFAULT: '#96885F',
          foreground: '#78704E',
        },
        'last-minute': {
          DEFAULT: '#EF505F',
          foreground: '#D43044',
        },
        premium: {
          DEFAULT: '#505460',
        },
        ultralux: {
          DEFAULT: '#96885F',
          foreground: '#78704E',
        },
        'lux-plus': {
          DEFAULT: '#304DAB',
          foreground: '#304DAB',
        },
        
        // Messaging Colors
        success: {
          DEFAULT: '#20B140',
          light: '#BFE9C8',
          dark: '#1B9335',
        },
        warning: {
          DEFAULT: '#E49F4E',
          light: '#F6DFC4',
          dark: '#BE8441',
        },
        error: {
          DEFAULT: '#EF505F',
          light: '#FCC8CC',
          dark: '#D43044',
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
 plugins: [
  require('@tailwindcss/typography'),
  require('tailwindcss-animate'),
  // other plugins  
],
}