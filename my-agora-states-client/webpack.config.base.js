const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: "development",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'docs/'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env'],
                ['@babel/preset-react', { runtime: 'automatic' }],
              ],
            },
          },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
        filename: 'style.css',
    }),
  ],
  optimization:{ minimizer: [
    new CssMinimizerPlugin(), // css를 줄여주는 플러그인
  ],
},
};