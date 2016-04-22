var path = require('path'),
    webpack = require('webpack'),
    commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

var node_modules_dir = path.resolve(__dirname, 'node_modules');
var main_js = path.resolve(__dirname, 'public/app.js');

var configs = {
    entry: {
        app : main_js
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].min.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,

            // 这里再也不需通过任何第三方来加载
            exclude: [node_modules_dir],
            loader: 'babel'
        }]
    },
    resolve:{
        extensions : ['', '.js', '.jsx', '.json']
    },
    plugins: [
        new webpack.DefinePlugin({
          "process.env": {
           // This has effect on the react lib size
            NODE_ENV: JSON.stringify("production")
          }
        }),
        commonsPlugin
    ]
};

module.exports = configs;