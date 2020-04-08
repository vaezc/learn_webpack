const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry:'./main.js',
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
                    "css-loader"
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
    ]
};