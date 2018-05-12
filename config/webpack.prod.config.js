const webpack = require('webpack');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');

const config = {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimizer: [
            // we specify a custom UglifyJsPlugin here to get source maps in production
            new UglifyJsWebpackPlugin({
                sourceMap: true,
                uglifyOptions: {
                    compress:{
                        reduce_vars: false,
                    },
                },
            })
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};

module.exports = config;