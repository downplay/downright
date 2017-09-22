import webpack from "webpack";
import path from "path";
import fs from "fs-extra";

import webpackConfig from "../webpack.config";

webpackConfig.output.path = path.resolve(__dirname, "../dist/scripts");

const compiler = webpack(webpackConfig);

/* eslint-disable no-console */
const handler = (error, stats) => {
    if (error) {
        console.error(error);
    } else {
        if (stats.hasErrors()) {
            console.error("Not built");
        }
        console.log("Built");
        fs.copySync(
            path.resolve(__dirname, "../index.html"),
            path.resolve(__dirname, "../dist/index.html")
        );
    }
};
/* eslint-enable no-console */

compiler.watch({}, handler);
