const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: "./src/index.js", // Entry point of your application
    output: {
        filename: "bundle.js", // Output bundle file name
        path: path.resolve(__dirname, "dist"), // Output directory
    },
    resolve: {
        extensions: [".js", ".jsx"],
        fallback: {
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "stream": require.resolve("stream-browserify"),
            "canvas": require.resolve("canvas"),
            "buffer": require.resolve("buffer/"),
            "util": require.resolve("util/"),
            "url": require.resolve("url/"),
            "assert": require.resolve("assert/"),
            "string_decoder": require.resolve("string_decoder/"),
            "path": require.resolve("path-browserify"),
            "vm": require.resolve("vm-browserify"),
            "crypto": require.resolve("crypto-browserify"),
            "zlib": require.resolve("browserify-zlib"),
            "os": require.resolve("os-browserify"),
            "events": require.resolve("events/"),
            "net": false,
            "tls": false,
            "fs": false,
            "child_process": false,
            "querystring": require.resolve("querystring-es3/"),

            // Add other fallbacks if needed
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.node$/,
                use: 'ignore-loader' // Add this rule to ignore .node files
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // Path to your index.html
            filename: 'index.html',
            inject: 'body',
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.API_URL': JSON.stringify(process.env.API_URL || 'http://localhost:3000'),
            // Add other environment variables as needed
            'process.env.NODE_DEBUG': JSON.stringify(process.env.NODE_DEBUG || 'false'),
            'process.browser': JSON.stringify(true),
        }),
    ],
};