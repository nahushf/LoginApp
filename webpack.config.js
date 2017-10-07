var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = function (env) {
    return {
        entry: path.join(__dirname, './src/components/index.tsx'),
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'bundle.[hash].js'
        },
        resolve: {
            extensions: ['.css', '.ts', '.tsx', '.js', '.json', '.gif']
        },
        module: {
            rules: [
                { test: /\.tsx?$/, use: 'tslint-loader', enforce: 'pre' },
                { test: /\.tsx?$/, use: ['babel-loader', 'awesome-typescript-loader'] },
                { test: /\.css$/, use: ['style-loader', 'css-loader'] },
                { test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, use: 'url-loader?limit=1024&name=fonts/[name].[ext]' },
                { test: /\.(jpg|jpeg|gif|png)$/, use: 'url-loader?limit=10&mimetype=image/(jpg|jpeg|gif|png)&name=images/[name].[ext]' }
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