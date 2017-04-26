var path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack'),
    src = path.resolve(__dirname, '../src'),
    build = path.resolve(__dirname, '../build')

module.exports = {
    
    entry : {
        vendor: ['jquery'],
        main: './src/index.es6'
    },
    
    devtool: '#source-map',
    
    output : {
        filename : '[name]-[hash].js',
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
            }
        ]
    },
    
   
    
    resolve: {
        alias: {
            jquery: 'jquery/dist/jquery.min.js'
        }
    },
    
    plugins: [
         new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor-[hash].min.js',
            //  minChunks: Infinity
         }),
        //  编译，输出最终的HTML文件
        new HtmlWebpackPlugin({
            title : 'Webpack Hot Reload Template',
            filename : '../default.html',
            inject : 'body',
            template: 'template.ejs',
            links: [{
                href : 'node_modules/bootstrap/dist/css/bootstrap.css',
                rel : 'stylesheet'
            }],
            /**
            scripts: [
                'node_modules/vue/dist/vue.js',                
				'node_modules/jquery/dist/jquery.js'
            ]
            **/
        })
        
    ]
}