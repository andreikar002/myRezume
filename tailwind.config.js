// module.exports = {
//   theme: {
//     colors: {
//       "main-green": "#40BF8E",
//     },
//   },
// };
const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: 'class',
  theme: {
    colors: {
      "main-green": "#40BF8E",
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
