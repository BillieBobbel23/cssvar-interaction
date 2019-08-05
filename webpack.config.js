const path = require("path");

module.exports = {
  mode: "production",
  watch: true,
  entry: [path.resolve(__dirname, "src/index.js")],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist/")
  }
};
