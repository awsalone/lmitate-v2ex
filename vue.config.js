module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  lintOnSave: true,
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    hot: true,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'https://www.v2ex.com/api/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
