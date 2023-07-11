/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  corePlugins: {
    preflight: false
  },
  important: true,
  theme: {
    fontFamily: {
      'sans': ['Poppins']
    },
    extend: {},
  },
  plugins: [],
}
