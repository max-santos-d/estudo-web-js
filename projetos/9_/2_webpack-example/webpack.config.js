const path = require('path'); // CommonJs

module.exports = {
    mode: 'development', // modo quando em desenvolvimento, quando for para produção utilizar 'production'
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist', 'assets', 'js')
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }],
    },
    devtool: 'source-map'
};
