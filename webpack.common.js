const path = require("path");
const HtmlWebapckPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/js/...',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clear: true
    },
    plugins: [
        new HtmlWebapckPlugin({
            template: ".src/html/template.html",
        }),
    ],
};