const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['./index.ts', './index.scss'],
    module: {
        rules: [
            {
                test: path.resolve(__dirname, "./index.scss"),
                loader: 'style-loader',
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "css-loader", 'sass-loader'
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    "css-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [path.resolve(__dirname, 'interface/*'), 'node_modules'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'nimbledocs.js'
    },
    plugins: [new HtmlWebpackPlugin({ template: path.join(__dirname, 'index.html'), inject: true }), new CopyWebpackPlugin({
        patterns: [{ from: 'src/assets', to: 'assets' }]
    })],
    devServer: {
        historyApiFallback: true
    },

};