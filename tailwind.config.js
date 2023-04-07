module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,png}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'notfavorite': "url('../src/images/star2.png')",
        'isfavorite': "url('../src/images/star1.png')",
        },
    },
  },
  plugins: [],
}