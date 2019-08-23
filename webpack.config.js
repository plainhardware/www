const path = require('path');
const CopyWebpack = require('copy-webpack-plugin');
const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CreateFileWebpack = require('create-file-webpack');
const DotEnvWebpack = require('dotenv-webpack');
require('dotenv').config();

const manifest = require(path.resolve(__dirname, 'src', 'manifest.json'))
manifest.name = process.env.NAME || 'Example'
manifest.short_name = process.env.SHORT_NAME || 'Example'

module.exports = {
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        }
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
            test: /\.s[ac]ss$/i,
            use: [{
                    loader: MiniCssExtract.loader
                },
                {
                    loader: 'css-loader',
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: (loader) => [
                            require('autoprefixer'),
                            require('cssnano')
                        ]
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        implementation: require("sass"),
                        includePaths: [path.resolve(__dirname, 'node_modules')]
                    }
                }
            ],
        }, {
            test: /\.(js|jsx)$/i,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    "plugins": [
                        ["babel-plugin-import", {
                            "libraryName": "@material-ui/core",
                            "libraryDirectory": "esm",
                            "camel2DashComponentName": false
                        }],
                        ["babel-plugin-import", {
                                "libraryName": "@material-ui/icons",
                                "libraryDirectory": "esm",
                                "camel2DashComponentName": false
                            },
                            "icons"
                        ]
                    ],
                    "presets": [
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ]
                }
            }]
        }]
    },
    plugins: [
        new DotEnvWebpack(),
        new CreateFileWebpack({
            path: path.resolve(__dirname, 'dist'),
            fileName: 'CNAME',
            content: process.env.CNAME || 'example.com'
        }),
        new CreateFileWebpack({
            path: path.resolve(__dirname, 'dist'),
            fileName: 'manifest.json',
            content: JSON.stringify(manifest)
        }),
        new CopyWebpack([{
            from: path.resolve(__dirname, 'src', 'assets'),
            to: path.resolve(__dirname, 'dist', 'static', 'assets')
        }]),
        new MiniCssExtract({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[hash].css'
        }),
        new HtmlWebpack({
            template: path.resolve(__dirname, 'src', 'index.html'),
            templateParameters: {
                title: process.env.SHORT_NAME || 'Example'
            }
        })
    ]
}