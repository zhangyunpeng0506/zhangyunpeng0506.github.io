const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
      .set('_d', resolve('src/data'))
  },
  productionSourceMap: false, // 打包时不生成.map文件

  devServer: {
    host: '0.0.0.0',
    port: 8081,
    open: false,
    proxy: null
  }
}
