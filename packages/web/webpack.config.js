const path = require('path');

module.exports = {
    mode: 'development',

    // Path to the entry file, change it according to the path you have
    entry: path.join(__dirname, 'src/index.js'),

    // Path for the output files
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js',
    },

    // Enable source map support
    devtool: 'source-map',

    // Loaders and resolver config
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // Disable reading babel configuration
                        babelrc: false,
                        configFile: false,

                        // The configuration for compilation
                        presets: [
                            ['@babel/preset-env', { useBuiltIns: 'usage' }],
                            '@babel/preset-react'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties'
                        ],
                    },
                },
            },
        ],
    },
    resolve: {
        alias: {
            'react-native$': require.resolve('react-native-web'),
        }
    },

    // Development server config
    devServer: {
        contentBase: [path.join(__dirname, 'public')],
        historyApiFallback: true,
    },
};
