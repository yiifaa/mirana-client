var path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack'),
    src = path.resolve(__dirname, '../src'),
    build = path.resolve(__dirname, '../build')

module.exports = {
    
    entry : {
        main: './src/main.es6'
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
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader?sourceMap"
                }, {
                    loader: "sass-loader?sourceMap",
                    options: {
                        //  includePaths: ["absolute/path/a", "absolute/path/b"]
                        sourceMap: true,
                        sourceMapContents: true,
                        sourceMapEmbed: true
                    }
                }]
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
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]'
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
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
            vue: 'vue/dist/vue.min.js',
            'vue-router': 'vue-router/dist/vue-router.min.js',
            'vue-i18n': 'vue-i18n/dist/vue-i18n.min.js',
            'echarts': 'echarts/dist/echarts.min.js',
			'styles': path.resolve(__dirname, '../styles'),
				
            // 内置模块
			'@': path.resolve(__dirname, '../src/'),
            'apps': path.resolve(__dirname, '../src/apps'),
            'plugins': path.resolve(__dirname, '../src/plugins'),
            'components': path.resolve(__dirname, '../src/components'),
            'services': path.resolve(__dirname, '../src/services'),
            'xStore': path.resolve(__dirname, '../src/xStore'),
            'themes': path.resolve(__dirname, '../src/themes')
            //bootstrap: 'bootstrap'
        }
    }
}