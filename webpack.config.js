const path = require("path");
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    entry: {
        app: "./app/assets/scripts/app.js"
    },

    output: {
        filename: "appMin.js",
        path: path.resolve(__dirname, "./app/temp/scripts")
    },
    module: {
        rules: [
            {
                loader: "babel-loader",
                query: {
                    presets: ["@babel/preset-env"]
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()],
      }
}