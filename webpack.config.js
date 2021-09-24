const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  resolve: {
    extensions: [".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  output: {
    publicPath: "public",
    filename: "basicts.js",
    path: path.resolve(__dirname, "public"),
  },
};
