const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    static: './dist',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // Loaders
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp|svg|ico)/,
        type: 'asset/resource',
      },
    ],
  },
  // Plugins
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        //relative path is from src
        { from: './src/favicon.ico' },
      ],
    }),
  ],
};
