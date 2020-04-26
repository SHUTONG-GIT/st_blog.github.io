const webpack = require('webpack');
module.exports = {
  devServer: {
    port: 8000,
    open: true, //是否自动打开浏览器
    proxy: 'http://127.0.0.1:3000/' // 设置允许跨域
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ]
  }
}
