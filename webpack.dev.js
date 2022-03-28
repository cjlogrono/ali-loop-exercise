const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    overlay: true,
    port: 3000,
    stats: 'minimal',
    disableHostCheck: true
  }
});
