'use strict'

module.exports = {
  publicPath: './',
//这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径，也可以用在类似 Cordova hybrid 应用的文件系统中。
  outputDir: '../cordova-app/www',
//将打包目录指向/cordova-projec下的www
  productionSourceMap: false,
//如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。

}