var path = require('path'),
    webpack = require('webpack'),
    node_modules = path.resolve(__dirname, 'node_modules'),
    pathToReact = path.resolve(node_modules, 'react/dist/react.min.js'),
    pathToReactDOM = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js'),
    pathToReactRouter = path.resolve(node_modules, 'react-router/umd/ReactRouter.min.js');

// 文件路径
var ROOT_PATH  = path.resolve(__dirname);
var APP_PATH   = path.resolve(ROOT_PATH, 'src');
var COMP_PATH  = path.resolve(ROOT_PATH, 'src/companies');
var UTILS_PATH = path.resolve(ROOT_PATH, 'src/utils');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var TEM_PATH   = path.resolve(ROOT_PATH, 'templates');
var STYLE_PATH = path.resolve(ROOT_PATH, 'less');
var CONFIG_PATH= path.resolve(ROOT_PATH, 'src/config');

// 插件
var UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({minimize: true});
var HtmlWebpackPlugin  = require('html-webpack-plugin'),
    HWPlugin = new HtmlWebpackPlugin({
        title: 'My first react app',
        template: path.resolve(TEM_PATH, 'index.html'),
        filename: 'index.html',
        chunks: ['app', 'vendors'],
        inject: 'body'
    });
var CleanWebpackPlugin = require('clean-webpack-plugin'),
    CWPlugin = new CleanWebpackPlugin(['build'], {
        root: ROOT_PATH,
        verbose: true,
        dry: true
    });
var CommonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.[hash:8].js');

var configs = {
    entry: {
        // vendors: ['webpack/hot/dev-server'],
        app: path.resolve(APP_PATH, 'app.jsx')
    },
    output: {
        path: BUILD_PATH,
        filename: 'js/[name].[hash:8].js',
    },
    // 启动dev source map，出错以后就会采用source-map的形式直接显示你出错代码的位置
    devtool: 'eval-source-map',
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
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8192&name=img/[name].[hash:8].[ext]'
            }
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
          'less' : STYLE_PATH,
          'config-path'  : CONFIG_PATH
        }
    },
    plugins: [
        CWPlugin,
        UglifyJsPlugin,
        HWPlugin,
        CommonsChunkPlugin
    ]
};

module.exports = configs;