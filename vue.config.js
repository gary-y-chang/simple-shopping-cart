module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://159.89.197.242:8000/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/express/api'
        }
      }
    }
  }
}
