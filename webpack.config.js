var path = require('path'),
    node_modules = path.resolve(__dirname, 'node_modules'),
    pathToReact = path.resolve(node_modules, 'react/dist/react.min.js'),
    pathToReactDOM = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js'),
    pathToReactRouter = path.resolve(node_modules, 'react-router/umd/ReactRouter.min.js'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix');

var configs = {
    entry: [
        'webpack/hot/dev-server',
        path.resolve(__dirname, 'src/app.jsx')
    ],
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'app.js',
    },
    module : {
        loaders : [
            {
                test : /\.jsx$/, // 判断是否为js文件
                loader : 'babel-loader',
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
    dev : {
        lessLoader : {
            lessPlugins : [
                new LessPluginAutoPrefix()
            ]
        }
    },
    resolve : {
        // require文件时省略文件的扩展名
        extensions : ['', '.js', '.jsx', '.json'],
        alias: {
          'react': pathToReact,
          'react-dom' : pathToReactDOM,
          'react-router' : pathToReactRouter,
          'comps' : path.resolve(__dirname, 'src/lib')
        }
    }
};

module.exports = configs;