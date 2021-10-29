const backend = require('./src/server/app')

module.exports = {
  devServer: {
    port: 8081,
    proxy: 'http://localhost:8080',
    before: backend
  },
  transpileDependencies: [
    'vuetify',
    'vuex-module-decorators'
  ],
  configureWebpack: {
    devtool: 'source-map'
  }
}
