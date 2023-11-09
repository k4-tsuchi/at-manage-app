/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'ryuhow-blue': '#004EA2', 
        'ryuhow-cream': '#FFFCD3',
        'btn-red': '#E5004A',
        'light-blue': '#c9e6ff'
      },
    },
  },
  plugins: [],
}

