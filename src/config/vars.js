const path = require('path');
const appPackage = require('../../package.json');

require('dotenv-safe').config({
  path: path.join(__dirname, '../../.env'),
  sample: path.join(__dirname, '../../.env.example'),
});

module.exports = {
  appName: appPackage.name,
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  thirdPartyService: {
    uri: process.env.TP_URI,
    endpoint: '/getInfo',
  },
};