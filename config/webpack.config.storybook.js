const union = require('lodash/union');
const StylableWebpackPlugin = require('@stylable/webpack-plugin');
const {
  createCommonWebpackConfig,
  getStyleLoaders,
} = require('./webpack.config');

const styleLoaders = getStyleLoaders({
  embedCss: true,
  isDebug: false,
  separateCss: false,
  hmr: false,
  tpaStyle: false,
});

module.exports = config => {
  const webpackCommonConfig = createCommonWebpackConfig({ isDebug: true });

  config.resolve.extensions = union(
    config.resolve.extensions,
    webpackCommonConfig.resolve.extensions,
  );

  config.module.rules = [
    ...webpackCommonConfig.module.rules,

    // Rules for Style Sheets
    ...styleLoaders,
  ];

  config.plugins = [...(config.plugins || []), new StylableWebpackPlugin()];

  return config;
};
