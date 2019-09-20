const path = require('path');
const CopyWebpack = require('copy-webpack-plugin');
const HtmlWebpack = require('html-webpack-plugin');
const CreateFileWebpack = require('create-file-webpack');
const DotEnvWebpack = require('dotenv-webpack');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

require('dotenv').config();

const manifest = require(path.resolve(__dirname, 'src', 'manifest.json'))
manifest.name = process.env.NAME || 'Example'
manifest.short_name = process.env.SHORT_NAME || 'Example'

module.exports = {
    mode: process.env.NODE_ENV || 'production',
    entry: {
        index: path.resolve(__dirname, 'src', 'index.jsx'),
        serviceWorker: path.resolve(__dirname, 'src', 'sw.js'),
    },
    output: {
        crossOriginLoading: 'anonymous',
        filename: '[name].' + process.env.VERSION + '.js',
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
                    name: '[name].' + process.env.VERSION + '.[ext]',
                    outputPath: 'static/assets/',
                    publicPath: 'static/assets/',
                    postTransformPublicPath: (p) => `__webpack_public_path__ + ${p}`,
                }
            }]
        }, {
            test: /\.s[ac]ss$/i,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
        }, {
            test: /\.(js|jsx)$/i,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    "plugins": [],
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
        }, {
            from: path.resolve(__dirname, 'src', 'robots.txt'),
            to: path.resolve(__dirname, 'dist')
        }]),
        new HtmlWebpack({
            template: path.resolve(__dirname, 'src', 'index.html'),
            templateParameters: {
                title: process.env.SHORT_NAME || 'Example',
                description: process.env.SHORT_NAME || 'Example dot com'
            }
        }),
        new ScriptExtHtmlWebpackPlugin({
            defer: ['firebase']
        }),
        new LiveReloadPlugin()
    ]
}