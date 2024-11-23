/** @type {import('tailwindcss').Config} */

import textShadowPlugin from 'tailwindcss-textshadow';

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
      textShadow: {
        'custom': '1px 1px 0 white, -1px -1px 0 white, -1px 1px 0 white, 1px -1px 0 white',
      },
    },
  },
  plugins: [
    textShadowPlugin
  ],
}

