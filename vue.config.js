module.exports = {
    publicPath: "",   //可以配置如/api/v0/xx
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy:{
            '/mock':{
                target:"http://localhost:8080",
                ws:false,   //websocket不知道干啥的
                changeOrigin: false //需添加,与路径有关
            }
        }
    }
}