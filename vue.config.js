module.exports = {
  // 反向代理
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      // 配置跨域
      '/api': {
        target: 'http://47.119.112.252:8070',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    before: app => { }
  }
};
