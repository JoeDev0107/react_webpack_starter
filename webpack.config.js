const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js',
        sourceMapFilename: 'index_bundle.map'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["babel-loader", "ts-loader", "tslint-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [require('autoprefixer')()]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
