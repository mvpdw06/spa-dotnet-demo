const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const env = process.env.NODE_ENV || 'development'
const isDevEnv = env === 'development'

module.exports = {
  mode: 'none',
  entry: path.join(__dirname, 'src/index.js'),
  output:　{
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: isDevEnv ? [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      filename: 'index.html',
      inject: true,
      compile: true,
      favicon: false,
    })
  ] : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader?cacheDirectory']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  performance: { hints: false },
  optimization: {
    minimizer: isDevEnv ? [] : 
    [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      })
    ],
    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  }
}
