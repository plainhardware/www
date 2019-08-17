const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new HWP({
            title: 'Plain Hardware | Hobby and Electronic store'
        })
    ]
}