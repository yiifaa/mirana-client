var path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack'),
    src = path.resolve(__dirname, '../src'),
    build = path.resolve(__dirname, '../build')

module.exports = {
    
    entry : {
        main: './src/index.es6'
    },
    
    devtool: '#source-map',
    
    output : {
        filename : '[name].js',
        publicPath: "/build/",
        path : build,
        //  umd包含了对amd、commonjs、var等多种规范的支持  
        libraryTarget : 'var'  
    },
    
    devServer: {
        inline: true    
    },
    
    module: {
        loaders: [
            /* ES6编译 */
            {
                test: /\.es6$/,                
                include: src,
                exclude: /(node_modules|build)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                        plugins: ['transform-runtime']
                    }
                }
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }, {
                test: /\.scss$/,
                loader: "style!css!sass"
            }, {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            }, {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]'
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }, {
                test: /\.(html|tpl)$/,
                loader: "html-loader"
            }
        ]
    },   
   
    resolve: {
        //extensions: ['', '.js', '.es6', '.vue'],
        alias: {
            jquery: 'jquery/dist/jquery.min.js',
            vue: 'vue/dist/vue.min.js'
            //bootstrap: 'bootstrap'
        }
    }
}