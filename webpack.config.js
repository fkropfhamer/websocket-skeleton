const path = require('path');

module.exports = {
    entry: './assets/js/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public/js')
    }
}
