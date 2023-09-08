/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#789363',
        'text-#0000': '#243c5a',
        "boder": "#000",
        "themtest": "#F4F4F4",
        "footer": "#575757",
        "color": "#FFFFFF",
        "footer-them": "#969696",
        "colorBlack": "#000",
        "backgroundopacity": "rgba(0,0,0,0.5)",
        "backgroundopacitywhite": "rgba(255,255,255,0.5)"

      },
      rotate: {
        'r5': '-5deg',
      },
      boxShadow: {
        'boxshadowbottom': '0px 4px 8px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}