module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Rubik', 'sans-serif'],
      },
      colors:{
        'doc-blue-100': '#55cfd4',
        'doc-blue-200': '#139cbb',
        'doc-blue-300': '#0628ad',
        'doc-blue-400': '#160d38',
      },
      backgroundImage: {
        'hero': "linear-gradient(to top, #160d38, #1a124c, #1c1661, #1c1b76, #19208d, #1736a5, #104cbd, #0062d5, #0088e9, #00a8ed, #00c6ea, #5ce1e6)"
      },
      screens: {
        'laptop': '980px',
        'tablet': '730px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
