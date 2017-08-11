import express from "express";
import webpack from "webpack";
import path from "path";

import webpackConfig from "./webpack.config";

const app = express();

// Index page
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
});

// Webpack dev server
const compiler = webpack(webpackConfig);
app.use(
    require("webpack-dev-middleware")(compiler, {
        publicPath: "/scripts/",
        contentBase: path.resolve(__dirname, "./public"),
        hot: true,
        quiet: false,
        noInfo: false,
        lazy: false,
        stats: "normal"
    })
);

app.use(
    require("webpack-hot-middleware")(compiler, {
        path: "/__what",
        dynamicPublicPath: false
    })
);

// Any public assets
app.use(express.static("public"));

// Starting up the machine
app.listen(3311, () => {
    console.log("Examples running on http://127.0.0.1:3311");
});
