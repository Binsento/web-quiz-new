const webpack = require('webpack');
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
    const modules = {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader",
                    },
                ],
            },
            {
                test: /\.module.(scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-hot-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            alias: { '../img': '../public/img' },
                            import: true,
                            importLoaders: 2,
                            localIdentName: '[name]__[local]__[hash:base64]',
                            modules: true,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.(scss)$/,
                exclude: /\.module.(scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-hot-loader',
                    {
                        loader: 'css-loader',
                        options: { alias: { '../img': '../public/img' } },
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: './img/[name].[ext]',
                        },
                    },
                ],
            },
        ]
    };

    const plugins = [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './public/img', to: 'img' },
            ],
        }),
        new CleanWebpackPlugin(),
        new WebpackNotifierPlugin({ alwaysNotify: false }),
    ];

    const resolve = {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    }

    return {
        modules,
        plugins,
        resolve,
    }
}