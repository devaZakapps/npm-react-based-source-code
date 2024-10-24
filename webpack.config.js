const path = require('path');

module.exports = {
    entry: './src/MyComponent.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'MyComponent.js',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,  // Add this rule to handle CSS
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
    },
};
