const path = require('path');
const commonConfig = require('./webpack.common');
const { HotModuleReplacementPlugin } = require('webpack');
const merge = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'development',
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['You application is running here http://localhost:8080']
      }
    }),
  new HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 8080,
    quiet: true,
    host: '0.0.0.0',
    historyApiFallback: true,
    hot: true,
    contentBase: path.resolve(__dirname, '../dist')
  }
});
