/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#f5f2eb',
        pink: '#e7a9ff',
        cream: '#e8e3da',
        hyped: {
          green: '#3EB489',
          blue: '#2196F3',
          orange: '#FF4D00',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '20px',
        pill: '50px',
      },
    },
  },
  plugins: [],
};
