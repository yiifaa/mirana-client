var path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    webpack = require('webpack'),
    src = path.resolve(__dirname, '../src'),
    build = path.resolve(__dirname, '../build')

const extractSass = new ExtractTextPlugin({
    filename: "[name].css"
});

module.exports = {
    
    entry : {
        main: './src/main.es6'
    },
        
    output : {
        filename : '[name]-[hash].js',
        publicPath: "/build/",
        path : build,
        //  umd包含了对amd、commonjs、var等多种规范的支持  
        libraryTarget : 'var'  
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
         extractSass,
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