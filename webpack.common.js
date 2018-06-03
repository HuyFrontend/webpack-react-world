const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Webpack app',
            template: './src/index.html',
            filename: './index.html'
        })
    ],
    devServer: {
        historyApiFallback: true, // to change url from 3000/#/home -> 3000/home
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'es2015'],
                        plugins: ['transform-class-properties']
                    }
                }
            },
            {
                test: /\.css$/,
                loaders: ['style-loader','css-loader'],
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(png|jpg|gif|svg|ico)$/,
                use: [
                {
                    loader: 'file-loader',
                    options: {
                        // name: '[path][name].[ext]',
                        // name: 'dirname/[hash].[ext]',
                        name: '[name].[ext]',
                        outputPath: 'images/'
                    }
                }]
            }
        ]
    }
};
