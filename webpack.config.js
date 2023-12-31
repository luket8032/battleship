const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
    ],
    output: {
        clean: true
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
};