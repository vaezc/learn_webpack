const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry:'./src/main.js',
    output: {
        filename:'bundle.js',
        path: path.resolve(__dirname,'./dist'),
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: [
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.js$/,
                use:['babel-loader']
            },
            {
                test: /\.scss/,
                use:['style-loader','css-loader','sass-loader'],
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.HotModuleReplacementPlugin({
            template:'./index.html'
        })
    ],
    devServer: {
        contentBase:'./',
        hot: true  
    },
    devtool: 'source-map',

};      