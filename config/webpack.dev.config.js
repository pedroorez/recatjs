const commonPaths = require('./common-paths');

const config = {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: commonPaths.outputPath,
        compress: true,
        historyApiFallback: true,
        hot: true,
        port: 9000,
        disableHostCheck: true,
        inline: true,
    }
};

module.exports = config;