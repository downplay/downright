import webpack from "webpack";
import path from "path";
import nodeExternals from "webpack-node-externals";
import ExtractTextPlugin from "extract-text-webpack-plugin";

const downrightCore = path.resolve(__dirname, "../source/index.js");
const themeDefault = path.resolve(__dirname, "../source/themes/default.js");
const themeDark = path.resolve(__dirname, "../source/themes/dark.js");

// Random hashed CSS classes
let cssIdent = "[name]__[local]___[hash:base64:5]";
let mainOutputPath = "themes/[name].js";
let cssOutputPath = "themes/default.css";
const externals = [nodeExternals()];
const entry = {};

switch (process.env.DOWNRIGHT_BUILD) {
    case "core":
        entry.main = [downrightCore];
        mainOutputPath = "[name].js";
        externals.push(/themes\/default/);
        break;
    case "theme-default":
        entry.default = themeDefault;
        break;
    case "theme-dark":
        entry.dark = themeDark;
        cssOutputPath = "themes/dark.css";
        break;
    case "theme-bem":
        entry.bem = themeDefault;
        cssIdent = "downright__contextmenu__[local]";
        cssOutputPath = "themes/bem.css";
        break;
    default:
        break;
}

// eslint-disable-next-line no-underscore-dangle
const __DEV__ = process.env.NODE_ENV === "development";

const webpackConfig = {
    context: path.resolve(__dirname, ".."),
    target: "node",
    externals,
    entry,
    output: {
        filename: mainOutputPath,
        path: path.resolve(__dirname, "../dist"),
        libraryTarget: "umd"
    },
    cache: true,
    devtool: "source-map",

    stats: {
        colors: true,
        reasons: true
    },

    plugins: __DEV__
        ? []
        : [
              new ExtractTextPlugin(cssOutputPath),
              new webpack.optimize.UglifyJsPlugin({
                  sourceMap: true
              }),
              new webpack.optimize.AggressiveMergingPlugin()
          ],

    resolve: {
        extensions: ["*", ".js", ".jsx", ".json"]
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
                            cacheDirectory: path.resolve(
                                __dirname,
                                "../babel-cache"
                            ),
                            ignore: "node_modules/**/*",
                            plugins: [
                                "babel-plugin-add-react-displayname",
                                "babel-plugin-transform-class-properties",
                                [
                                    "babel-plugin-transform-runtime",
                                    {
                                        helpers: true,
                                        polyfill: false,
                                        regenerator: true
                                    }
                                ],
                                "babel-plugin-transform-object-rest-spread",
                                "babel-plugin-transform-decorators-legacy"
                            ],
                            presets: [
                                "babel-preset-react",
                                [
                                    "babel-preset-env",
                                    {
                                        modules: false,
                                        uglify: false
                                    }
                                ]
                            ]
                        }
                    },
                    "eslint-loader"
                ]
            },
            {
                test: /\.svg$/,
                use: {
                    loader: "svg-url-loader",
                    options: {}
                }
            },
            __DEV__
                ? {
                      test: /\.css$/,
                      loader: `style-loader!css-loader?modules&importLoaders=1&localIdentName=${cssIdent}!postcss-loader`
                  }
                : {
                      test: /\.css$/,
                      use: ExtractTextPlugin.extract({
                          fallback: "style-loader",
                          use: `css-loader?modules&importLoaders=1&localIdentName=${cssIdent}!postcss-loader`
                      })
                  }
        ]
    }
};

export default webpackConfig;
