// next.config.js
const withLess = require("next-with-less");
const { i18n } = require('./next-i18next.config')

module.exports = withLess({
  lessLoaderOptions: {
    lessOptions: {
      /* ... */
      modifyVars: {
        "primary-color": "#9900FF",
      },
    },
  },
  i18n,
  
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ['@svgr/webpack'],
//     });

//     return config;
  
// }
});