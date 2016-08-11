// var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: [
      'webpack/hot/only-dev-server',//脚本当发生改动的时候去自动刷新应用
      'webpack-dev-server/client?http://localhost:8080',
      path.resolve(__dirname, 'js/app.js') //入口文件相对路径
    ],
    output: {
        path: path.resolve(__dirname, 'build'), //输出文件相对路径
        filename: 'app.js', //输出文件名称
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query:{presets:['es2015','react']}},
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    resolve:{
        extensions:['','.js','.json']
    }
};