const path = require('path');
const HWP = require('html-webpack-plugin');
const MCEP = require('mini-css-extract-plugin');

module.exports = {
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.(png|jpe?g|gif)$/i,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[contenthash].[ext]',
                    outputPath: 'static/assets/',
                    publicPath: 'static/assets/',
                    postTransformPublicPath: (p) => `__webpack_public_path__ + ${p}`,
                }
            }]
        }, {
            test: /\.scss$/,
            use: [{
                    loader: MCEP.loader
                },
                {
                    loader: 'css-loader',
                },
                {
                    loader: 'sass-loader'
                }
            ],
        }]
    },
    plugins: [
        new MCEP({
            filename: '[name].[hash].css'
        }),
        new HWP({
            title: 'Plain Hardware',
            favicon: path.resolve(__dirname, 'src', 'favicon.ico'),
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ]
}