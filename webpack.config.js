const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/'),
        },
        compress: true,
        port: 3000,
    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
            { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
			{ test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    }
};