// next.config.js
const withLess = require("next-plugin-antd-less");
const { i18n } = require('./next-i18next.config')
const lessToJS = require('less-vars-to-js');
const fs =require("fs");
 const path =require("path")


module.exports = withLess({
// optional: you can modify antd less variables directly here
modifyVars: { '@primary-color': '#04f' },
// Or better still you can specify a path to a file 
lessVarsFilePath: './src/stylesheets/custom-antd.less',
// optional
lessVarsFilePathAppendToEndOfContent: false,
// optional https://github.com/webpack-contrib/css-loader#object
cssLoaderOptions: {},

// Other Config Here...

webpack(config) {
  return config;
},

// ONLY for Next.js 10, if you use Next.js 11, delete this block
future: {
  webpack5: true,
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