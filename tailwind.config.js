/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pan-red': '#BE0002',
        'pan-black': '#000000',
        'pan-green': '#008751',
        'pan-gold': '#FDBD00',
        'kente-purple': '#800080',
        'kente-blue': '#000080',
        'earth-red': '#8B0000',
        'savanna-brown': '#8B4513',
        primary: {
          DEFAULT: '#BE0002',
          dark: '#8B0000',
          light: '#FF1A1A'
        },
        accent: {
          DEFAULT: '#FDBD00',
          dark: '#CC9900',
          light: '#FFD700'
        }
      }
    },
  },
  plugins: [],
};