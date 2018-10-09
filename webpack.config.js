const path = require('path');
const { VueLoaderPlugin } = require('vue-loader'); //最新版webpack需要引入此插件

module.exports = {
    //程序的入口文件
    entry: './www/app/main.js',
    //程序的出口文件（被打包的文件）
    output: {
        //打包文件输出的路径
        path: path.resolve(__dirname, './www/dist'),
        //打包文件的名称
        filename: 'all.js'
        //这是对webpack-dev-server的配置，是一个虚拟路径
        // publicPath:"public" //这是对webpack-dev-server的配置，配置虚拟路径
    },
    //自动监听
    watch: true,
    mode: 'development',
    //配置webpack的模块插件
    module: {
        // 关于模块配置
        rules: [
            // 模块规则（配置 loader、解析器等选项）
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ["@babel/plugin-syntax-dynamic-import"]
                    }
                }
            },
            {
                test: /\.vue?$/, //解析的时候匹配到的都是js文件
                include: [path.resolve(__dirname, 'www/app')], //翻译什么文件夹中的文件
                exclude: [path.resolve(__dirname, 'node_modules')], //不翻译什么文件夹
                loader: 'vue-loader'
            },
            {
                test: /\.css$/, //解析的时候匹配到的都是js文件
                // include: [path.resolve(__dirname, 'www/app')], //翻译什么文件夹中的文件
                // exclude: [path.resolve(__dirname, 'node_modules')], //不翻译什么文件夹
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|woff|woff2|svg|ttf|eot)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100000
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            //配置别名
            vue$: 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    },
    //最新版webpack需要引入此插件
    plugins: [new VueLoaderPlugin()]
};
