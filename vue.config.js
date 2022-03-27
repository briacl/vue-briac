var path = require('path');
module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    devtool: process.env.CF_PAGES === '1' ? (process.env.__DEBUG__ === '1' ? 'source-map' : false) : 'source-map',
    mode: process.env.CF_PAGES === '1' ? (process.env.__DEBUG__ === '1' ? 'development' : 'production') : 'development',
  },
  chainWebpack(config) {
    config.resolve.alias.set('vue', path.resolve('./node_modules/vue')); 
  }
};