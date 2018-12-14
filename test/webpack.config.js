'use strict';

module.exports = {
    mode: 'development',
    context: __dirname,
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'out.js',
        libraryExport: 'default',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [{
            test: /\.glsl$/,
            use: require.resolve('..')
        }]
    },
    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false,
        setImmediate: false
    },
    target: 'web',
    devtool: 'inline-source-map'
};
