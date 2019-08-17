const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
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
        }]
    },
    plugins: [
        new HWP({
            templateParameters: {
                title: 'Plain Hardware | Hobby and Electronic store',
                logo: path.resolve(__dirname, 'src', 'assets', 'logo.png'),
            },
            favicon: path.resolve(__dirname, 'src', 'favicon.ico'),
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ]
}