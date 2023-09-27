// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
    mode: isDev ? "development" : "production",
    entry: {
        app: path.join(__dirname, "./src-server/index.tsx"),
    },
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "[name].bundle.js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ["file-loader"],
            },
        ],
    },
    plugins: [
        new ESLintPlugin({
            extensions: [".ts", ".tsx"],
            emitErrors: true,
            failOnError: false,
        }),
        new ForkTsCheckerWebpackPlugin({
            eslint: {
                enabled: true,
            },
        }),
    ],
    devtool: isDev ? "source-map" : "none",
    devServer: {
        contentBase: path.join(__dirname, "./dist"),
        port: 3000,
    },
};
