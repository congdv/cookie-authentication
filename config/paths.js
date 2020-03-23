/**
 * Webpack configuration by Tania Rascia
 * https://github.com/taniarascia/webpack-boilerplate
 * Edited by congdv
 */
const path = require('path')

module.exports = {
  client: path.resolve(__dirname, '../src/client'),
  src: path.resolve(__dirname, '../src'), // source files
  build: path.resolve(__dirname, '../dist'), // production build files
  static: path.resolve(__dirname, '../public'), // static files to copy to build folder
}
