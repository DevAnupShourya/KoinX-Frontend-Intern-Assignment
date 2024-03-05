/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "bg-primary":"#EFF2F5",
        "bg-secondary":"#FFFFFF",
        "btn-liner":"linear-gradient(to right, #2870EA, #1B4AEF)",
      },
      textColor:{
        "text-primary" : "#0F1629",
        "text-secondary" : "#3E5765",
      },
      colors: {
        "primary-blue": "#0052FE",
      },
    },
  },
  plugins: [],
}

