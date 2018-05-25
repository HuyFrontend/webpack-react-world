const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        // contentBase: './dist',
        contentBase: path.join(__dirname, 'dist'),

        // set port
        port: 3000,
        // Reload serve when files changed
        watchContentBase: true,
    },
});