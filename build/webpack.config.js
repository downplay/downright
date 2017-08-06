import webpack from "webpack";
import path from "path";
import nodeExternals from "webpack-node-externals";
import ExtractTextPlugin from "extract-text-webpack-plugin";

const downrightSource = path.resolve(__dirname, "../source/index.js");
const __DEV__ = process.env.NODE_ENV === "development";

const webpackConfig = {
    context: path.resolve(__dirname, ".."),
    target: "node",
    externals: [nodeExternals()],
    entry: {
        main: [
            downrightSource,
        ],
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "../dist"),
        libraryTarget: "umd",
    },
    cache: true,
    devtool: "source-map",

    stats: {
        colors: true,
        reasons: true,
    },

    plugins: __DEV__ ? [] : [
        new ExtractTextPlugin("theme.css"),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
    ],

    resolve: {
        extensions: ["*", ".js", ".jsx", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [
                    {
                        loader: "babel-loader",
                        query: {
                            babelrc: false,
                            cacheDirectory: path.resolve(__dirname, "../babel-cache"),
                            ignore: "node_modules/**/*",
                            plugins: [
                                "react-hot-loader/babel",
                                "babel-plugin-transform-class-properties",
                                [
                                    "babel-plugin-transform-runtime",
                                    {
                                        helpers: true,
                                        polyfill: false,
                                        regenerator: true,
                                    },
                                ],
                                "babel-plugin-transform-object-rest-spread",
                                "babel-plugin-transform-decorators-legacy",
                            ],
                            presets: [
                                "babel-preset-react",
                                [
                                    "babel-preset-env",
                                    {
                                        modules: false,
                                        uglify: false,
                                    },
                                ],
                            ],
                        },
                    },
                    "eslint-loader",
                ],
            },
            __DEV__ ? {
                test: /\.css$/,
                loader: "style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader",
            } : {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader",
                }),
            },
        ],
    },
};

export default webpackConfig;
