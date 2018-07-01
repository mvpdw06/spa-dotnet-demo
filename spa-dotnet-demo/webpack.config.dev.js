const baseConfig = require('./webpack.config')

const devServer = {
  hot: true,
  inline: true,
  historyApiFallback: true,
  stats: 'minimal'
}

module.exports = {
  ...baseConfig,
  devServer
}
