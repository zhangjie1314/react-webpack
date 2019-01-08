var path = require('path')

// 文件路径
var ROOT_PATH = path.resolve(__dirname)
var APP_PATH = path.resolve(ROOT_PATH, 'src')
var BUILD_PATH = path.resolve(ROOT_PATH, 'build')
var TEM_PATH = path.resolve(ROOT_PATH, 'templates')

// 开发浏览器端口
const port = 10010

// 插件
var HtmlWebpackPlugin = require('html-webpack-plugin'),
    HWPlugin = new HtmlWebpackPlugin({
        template: path.resolve(TEM_PATH, 'index.html'),
        filename: 'index.html',
        chunks: [ 'app', 'runtime~app', 'vendors-app' ],
        inject: 'body',
        minify: {
            //压缩HTML文件
            removeComments: true, //移除HTML中的注释
            collapseWhitespace: true //删除空白符与换行符
        }
    })
var CleanWebpackPlugin = require('clean-webpack-plugin'),
    CWPlugin = new CleanWebpackPlugin([ 'build' ], {
        root: ROOT_PATH,
        verbose: true,
        dry: true
    })

var configs = {
    // 可选值 none, development , production
    mode: 'production',
    entry: {
        app: [ path.resolve(APP_PATH, 'app.jsx') ]
    },
    output: {
        path: BUILD_PATH,
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /.(jsx|js|mjs)$/,
                enforce: 'pre',
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    emitError: true,
                    emitWarning: true
                }
            },
            {
                test: /\.(jsx|js|mjs)$/,
                include: APP_PATH,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                        { plugins: [ '@babel/plugin-proposal-class-properties' ] }
                    ]
                }
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=8192&name=img/[name].[hash:8].[ext]'
            }
        ]
    },
    resolve: {
        // require文件时省略文件的扩展名
        extensions: [ '.js', '.jsx', '.json' ]
    },
    optimization: {
        runtimeChunk: true,
        splitChunks: {
            // 有效值为all，async和initial
            chunks: 'all',
            // 指定名称分隔符
            automaticNameDelimiter: '-'
        }
    },
    plugins: [ CWPlugin, HWPlugin ]
}

module.exports = configs
