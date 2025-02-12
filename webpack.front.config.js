const path = require('path');

module.exports = {
    entry: {
        stylesheets: './front/scripts/stylesheets.js',
        'page-logic': './front/scripts/page-logic.ts',
        forms: './front/scripts/forms.ts',
        timer: './front/scripts/timer.js',
        dresscode: './front/scripts/dresscode.js',
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
};