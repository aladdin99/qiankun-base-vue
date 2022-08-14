
const { name } = require('./package');

// 集成子应用的代理配置
const app1Config = require("./../qiankuan-micro-app1/vue.config")
const app2Config = require("./../qiankuan-micro-app2/vue.config")
const proxy = Object.assign({}, app1Config.devServer.proxy, app2Config.devServer.proxy)

module.exports = {
  devServer: {
    port: 3010,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy
  },
  // 自定义webpack配置
  configureWebpack: {
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};