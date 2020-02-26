const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/main.tsx",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.png$/,
        use: ["url-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".js", ".png"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My Tsx App",
      template: "./src/index.html" // これがないとdiv id=rootが引き継がれない
    })
  ]
};
