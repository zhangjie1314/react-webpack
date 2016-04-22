var path = require('path'),
    webpack = require('webpack'),
    node_modules = path.resolve(__dirname, 'node_modules'),
    pathToReact = path.resolve(node_modules, 'react/dist/react.min.js'),
    pathToReactDOM = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js'),
    pathToReactRouter = path.resolve(node_modules, 'react-router/umd/ReactRouter.min.js'),
    HtmlWebpackPlugin = require('html-webpack-plugin');


var ROOT_PATH  = path.resolve(__dirname);
var APP_PATH   = path.resolve(ROOT_PATH, 'src');
var COMP_PATH  = path.resolve(ROOT_PATH, 'src/companies');
var UTILS_PATH = path.resolve(ROOT_PATH, 'src/utils');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var TEM_PATH   = path.resolve(ROOT_PATH, 'templates');
var STYLE_PATH = path.resolve(ROOT_PATH, 'less');

// 使用uglifyJs压缩js代码
var UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({minimize: true});
var HWPlugin = new HtmlWebpackPlugin({
        title: 'My first react app',
        template: path.resolve(TEM_PATH, 'index.html'),
        filename: 'index.html',
        chunks: ['app', 'vendors'],
        inject: 'body'
    });
var CommonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')

var configs = {
    entry: {
        // vendors: ['webpack/hot/dev-server'],
        app: path.resolve(APP_PATH, 'app.jsx')
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].js',
    },
    // 启动dev source map，出错以后就会采用source-map的形式直接显示你出错代码的位置
    devtool: 'eval-source-map',
    // 打开开发服务
    devServer: {
        hisotryApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        proxy: {
            'api/*': {
                target: 'http://localhost:8080',
                secure: false
            }
        }
    },
    module : {
        // loader前执行处理，这样每次npm run dev的时候就可以看到jshint的提示信息
        preLoaders: [
            {
                test: /\.jsx?$/,
                include: APP_PATH,
                loader: 'jshint-loader'
            }
        ],
        loaders : [
            {
                test : /\.jsx$/, // 判断是否为jsx文件
                loader : 'babel',
                include: APP_PATH,
                query : {
                    presets : ['es2015', 'react']
                }
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
        ]
    },
    // 配置jshint的选项，让其支持es6的校验 http://www.jshint.com/docs/options/
    jshint: {
        esnext: true
    },
    resolve : {
        // require文件时省略文件的扩展名
        extensions : ['', '.js', '.jsx', '.json'],
        alias: {
          'react': pathToReact,
          'react-dom' : pathToReactDOM,
          'react-router' : pathToReactRouter,
          'comps' : COMP_PATH,
          'utils' : UTILS_PATH,
          'less' : STYLE_PATH
        }
    },
    plugins: [
        UglifyJsPlugin,
        HWPlugin,
        CommonsChunkPlugin
    ]
};

module.exports = configs;