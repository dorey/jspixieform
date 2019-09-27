const path = require('path')
const webpack = require('webpack')

const APP_DIR = path.resolve(__dirname, 'src')
const BUILD_DIR = path.resolve(__dirname, 'dist')

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  mode: 'development',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [{
      test: /\.js?$/,
      loaders: ['react-hot-loader/webpack', 'babel-loader'],
      include: path.join(__dirname, 'src'),
      exclude: [ /\.spec\.js/ ]
    },
    {
      test: /\.json$/,
      loaders: ['json-loader', 'babel'],
      include: path.join(__dirname, 'src'),
    }]
  }
}
