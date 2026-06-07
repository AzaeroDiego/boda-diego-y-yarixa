/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: '#0B0F0B',
        smoke: '#2F3A2E',
        ivory: '#F8F5EE',
        champagne: '#C8A96B',
        sage: '#5E6647',
        blush: '#D8C3A5',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(200, 174, 125, 0.16)',
        velvet: '0 26px 80px rgba(0, 0, 0, 0.42)',
      },
    },
  },
  plugins: [],
};
