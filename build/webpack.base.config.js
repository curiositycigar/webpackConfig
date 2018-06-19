/**
 * Created by YOU on 2018/6/15.
 * common config
 */
const webpack = require('webpack')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 多入口配置，实际可包装方法生成多入口
  entry: {
    app: './src/main.js',
    app2: './src/main2.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  // 代码分割
  optimization: {
    splitChunks: {
      minSize: 1,
      cacheGroups: {
        vendor: {
          name: "vendor",
          chunks: "initial",
          minChunks: 2
        }
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // html插件，实际可包装方法生成
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'dist', 'index.html'),
      template: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'dist', 'index2.html'),
      template: 'index2.html',
      chunks: ['app2']
    })
  ]
};