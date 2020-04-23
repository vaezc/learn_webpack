const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    //入口
    entry: {
        main:"./src/main.js",
        another: "./src/another-module.js"
    },
    //输出
    output: {
        //输出文件名称 如果是代码拆分或者多个入口时
        //filename: "[name].[hash].bundle.js"
        filename:"[name].bundle.js",
        //输出目录路径，应该是绝对路径
        path: path.resolve(__dirname,"./dist"),
        // publicPath: "https://cdn.example.com/assets/"
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: [
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../"
                        }
                    },
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.js$/,
                use:["babel-loader"]
            },
            {
                test: /\.scss/,
                use:["style-loader","css-loader","sass-loader"],
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.HotModuleReplacementPlugin({
            template:"./index.html"
        }),
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        }),
        new CleanWebpackPlugin()
    ],

};      