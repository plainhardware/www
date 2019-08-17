const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new HWP({
            favicon: path.resolve(__dirname, 'src', 'favicon.ico'),
            title: 'Plain Hardware | Hobby and Electronic store',
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ]
}