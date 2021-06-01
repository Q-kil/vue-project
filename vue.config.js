const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  publicPath: "./",
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
        {
          from: 'node_modules/@PixelPai/game-core/release/js',
          to: './js'
        },
        {
          from: `node_modules/@PixelPai/game-core/release/resources`,
          to: `./resources`,
          toType: "dir"
        }
      ]})
    ]
  },
}