const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge (common, {
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/html/template.html"],
    },
    modules: {
        rules: [
            {
                test: /\.css$/i,
                use: [ "style-loader", "css-loader" ],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpeg|jpg|gif)$/i,
                type: "asset/resource",
            }
        ],
    },
});