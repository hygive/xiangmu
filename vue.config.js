


module.exports = {
    // publicPath: process.env.NODE_ENV === 'production' ? './' : './',
    publicPath: '/',
    lintOnSave: true,
    productionSourceMap: false,
    devServer: {
        host: "localhost", //要设置当前访问的ip 否则失效
        port: 8080,//当前web服务端口
        open: false, //浏览器自动打开页面
        
        proxy: {
          '/api': {
            target: 'http://10.100.18.125:96/index.php',//目标地址
            ws: true,//是否代理websocket
            changeOrigin: true,//是否跨域
            // pathRewrite: {
            //   '^/api': ''//url重写
            // }
          }
        }
    }
}
