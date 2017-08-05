import webpack from 'webpack';
import webpackConfig from './webpack.config';

const compiler = webpack(webpackConfig);

compiler.run((error, result) => {
  console.log(error);
  console.log(result);
});
