/*
  webpack prod config file
*/
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

const prodConfig = merge(baseConfig, {
  plugns: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false,
      parallel: true
    })
  ]
})

module.exports = prodConfig