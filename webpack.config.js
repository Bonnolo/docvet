const path = require("path");

module.exports = {
  entry: {
    index: "./assets/js/index.js",
  },
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "dist/js/[name].js",
  },
  plugins: [],
};
