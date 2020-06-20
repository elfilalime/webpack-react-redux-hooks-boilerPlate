const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx",".js"]
    },
    entry:"./src/index.tsx",
    output: {
        path : path.join(__dirname,"/dist"),
        filename : "bundle.js"
    },
    module:{
        rules : [
            {
                test : /\.ts(x?)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'ts-loader'
                } 
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}