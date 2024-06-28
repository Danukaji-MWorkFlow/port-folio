/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing:{
        'extra-wide': '0.3em',
        'super-wide': '0.5em'
      },
      fontFamily:{
        cursive: ["Dancing Script",'cursive'],
        Aldrich: ["Aldrich", "cursive"],
        Alata: ["Alata", 'sans-serif'],
        Alerta: ["Allerta Stencil", 'cursive'],
        Kalam: ["Kalam", "cursive"],
        Architects: ["Architects Daughter","italic"],
        googleRoboto: ["Roboto", 'sans-serif']
      },
      colors:{
        'gold-500': '#FFD700',
        'silver-500': '#C0C0C0',
        amber:{
          400:'#facc15',
          500:'#fbbf24',
        }
      },
      width:{
        'navbar': '700px',
      }
    },
  },
  varient:{
    letterSpacing:['responsive', 'hover', 'focus'],
  },
  plugins: [],
}

