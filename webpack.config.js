var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = function (env) {
    return {
        entry: path.join(__dirname, './src/index.tsx'),
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'bundle.[hash].js'
        },
        resolve: {
            extensions: ['.css', '.ts', '.tsx', '.js', '.json']
        },
        module: {
            rules: [
                { test: /\.tsx?$/, use: 'tslint-loader', enforce: 'pre' },
                { test: /\.tsx?$/, use: 'awesome-typescript-loader' },
                { test: /.\css$/, use: ['style-loader', 'css-loader'] },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'index.ejs',
                filename: 'index.html'
            })
        ]
    }
}