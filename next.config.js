// next.config.js
const withLess = require("next-with-less");
const { i18n } = require('./next-i18next.config')

module.exports = withLess({
  lessLoaderOptions: {
  },

  i18n,
  // webpack(config) {
  //   const fileLoaderRule = config.module.rules.find(
  //     (rule) => rule.test && rule.test.test('.svg'),
  //   );
  //   fileLoaderRule.exclude = /\.svg$/;
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     loader: require.resolve('@svgr/webpack'),
  //   });
  //   return config;
  // },
});