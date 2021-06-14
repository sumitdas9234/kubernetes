const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: path.resolve(__dirname, "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "api.bundle.js",
  },
  target: "node",
  plugins: [
    new CopyWebpackPlugin([
        {from: path.resolve(__dirname, "public/"),to: path.resolve(__dirname, "dist/public/")} 
    ]), 
    new CopyWebpackPlugin([
      {from: path.resolve(__dirname, "views/"),to: path.resolve(__dirname, "dist/views/")} 
  ]), 
]
};
