const path = require('path');
const CWP = require('copy-webpack-plugin');
const HWP = require('html-webpack-plugin');
const MCEP = require('mini-css-extract-plugin');
const CFW = require('create-file-webpack');

const DEW = require('dotenv-webpack');
require('dotenv').config();

const manifest = require(path.resolve(__dirname, 'src', 'manifest.json'))
manifest.name = process.env.NAME || 'Example'
manifest.short_name = process.env.SHORT_NAME || 'Example'

module.exports = {
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
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
        }, {
            test: /\.(js|jsx)$/i,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader'
            }]
        }]
    },
    plugins: [
        new DEW(),
        new CFW({
            path: path.resolve(__dirname, 'dist'),
            fileName: 'CNAME',
            content: process.env.CNAME || 'example.com'
        }),
        new CFW({
            path: path.resolve(__dirname, 'dist'),
            fileName: 'manifest.json',
            content: JSON.stringify(manifest)
        }),
        new CWP([{
                from: path.resolve(__dirname, 'src', 'assets'),
                to: path.resolve(__dirname, 'dist', 'static', 'assets')
            },
            {
                from: path.resolve(__dirname, 'src', 'manifest.json'),
                to: path.resolve(__dirname, 'dist')
            }
        ]),
        new MCEP({
            filename: '[name].[hash].css'
        }),
        new HWP({
            template: path.resolve(__dirname, 'src', 'index.html'),
            templateParameters: {
                title: "Plain Hardware"
            }
        })
    ]
}