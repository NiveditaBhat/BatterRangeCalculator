const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              outputPath: "/",
            },
          },
        ],
      },
      {
        test: /\.json$/,
        use: "json-loader",
        type: "javascript/auto",
      },
    ],
  },
  devServer: {
    hot: true,
    port: 1234,
    static: path.join(__dirname, "dist"),
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
