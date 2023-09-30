/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      backgroundImage: {
      'button' : 'linear-gradient(45deg, #fe3072, #ff5940)',
      'button-r' : 'linear-gradient(260deg, #fe3072, #ff5940)',
    },
  },
  },
  plugins: [],
}

