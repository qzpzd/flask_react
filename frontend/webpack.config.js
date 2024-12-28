const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 引入MiniCssExtractPlugin
const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    mode: isProduction ? 'production' : 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../backend/static'),
        filename: 'bundle.js',
        publicPath: isProduction ? '/static/' : '/',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    isProduction ? MiniCssExtractPlugin.loader : 'style-loader', // 根据环境选择loader
                    'css-loader'
                ]
            }
        ]
    },
    devServer: {
        port: 3000,
        static: {
            directory: path.resolve(__dirname, 'public')
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html',
            publicPath: isProduction ? '/static/' : '/',
        }),
        isProduction && new MiniCssExtractPlugin({ // 仅在生产环境中使用MiniCssExtractPlugin
            filename: 'styles.css'
        })
    ].filter(Boolean) // 过滤掉undefined值
};