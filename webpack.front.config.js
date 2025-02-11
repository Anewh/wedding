const path = require('path');

module.exports = {
    entry: {
        stylesheets: './front/scripts/stylesheets.js',
        forms: './front/scripts/forms.js',
        timer: './front/scripts/timer.js',
    },
    target: 'web',
    output: {
        filename: '[name].js',
        clean: true,
        path: path.resolve(__dirname, 'public/scripts'),
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    }
};