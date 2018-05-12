const path = require('path');
const webpack = require('webpack');
const CleanWebPackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const OfflinePlugin = require('offline-plugin');

const commonPaths = require('./common-paths');

const config = {
    mode: 'production',
    entry: './src/index.js',
    
    output: {
        filename: 'bundle.js',
        path: commonPaths.outputPath,
        publicPath: '/'
    },
    resolve: {
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat',
        }
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'eslint-loader',
                options: {
                    failOnWarning: true,
                    failOnerror: true
                },
                exclude: /node_modules/
            },
            {
                test: /\.js$/, // Check for all js files
                exclude: /node_modules\/(?!(dom7|swiper)\/).*/,
                loader: 'babel-loader'
            },
            {
                test: /\.s?css$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })                
                //exclude: /node_modules/
            },
            {
                test: /\.(?:png|jpg|svg)$/,
                loader: 'url-loader',
                query: {
                    // Inline images smaller than 10kb as data URIs
                    limit: 10000
                }
            }, 
            {
                test: /\.woff|.woff2|.ttf|.eot|.otf|.svg*.*$/,
                loader: 'file-loader'
            }
        ]
    },
    optimization: {
        minimizer: [],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new ExtractTextWebpackPlugin('styles.css'),
        new CleanWebPackPlugin(['public'], { root: commonPaths.root }),
        new HtmlWebPackPlugin({
            template: commonPaths.template,
            favicon: commonPaths.favicon,
            inject: true,
            hash: true,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'API_HOST': JSON.stringify('https://jsonplaceholder.typicode.com')
            }
        }),
        new WebpackPwaManifest({
            name: 'Cat Interactive',
            short_name: 'EICAT',
            description: 'See photos of cats!',
            background_color: '#ffffff',
            display: 'standalone',
            theme_color: '#e83b38',
            start_url: '/index.html?utm_source=homescreen',
            icons: [
                {
                    src: path.resolve('src/images/icon.png'),
                    sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
                }
            ]
        }),
        new OfflinePlugin(), // Keep at the bottom
    ]
};

module.exports = config;