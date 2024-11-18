/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '412px',
        // => @media (min-width: 412px) { ... }
      },
    },
  },
  plugins: [],
}

