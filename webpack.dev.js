const { merge } = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    port: 1234,
    static: path.join(__dirname, "dist"),
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
