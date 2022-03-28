const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        type: 'javascript/auto'
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          { loader: 'babel-loader', options: { cacheDirectory: true } },
          'eslint-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader'
      },
      { test: /\.css$/, use: 'css-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Loop-test',
      // favicon: path.resolve(__dirname, 'src/images', 'favicon.png'),
      template: path.resolve(__dirname, 'public', 'index.html'),
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      }
    })
  ],
  resolve: {
    alias: {
      'react-router-dom': path.resolve('./node_modules/react-router-dom')
    }
  }
};
