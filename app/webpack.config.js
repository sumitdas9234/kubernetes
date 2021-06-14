const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  entry: path.resolve(__dirname, "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "api.bundle.js",
  },
  target: "node",
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public/"),
          to: path.resolve(__dirname, "dist/public/"),
        },
        {
          from: path.resolve(__dirname, "views/"),
          to: path.resolve(__dirname, "dist/views/"),
        },
      ],
    }),
  ],
};
