module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  mode:'jit',
  theme: {
    extend: {
      fontFamily: {
        yellowtail: ["Yellowtail", "Sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
