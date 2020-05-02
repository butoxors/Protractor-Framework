// exports.config = {
//   directConnect: true,

//   capabilities: {
//     'browserName': 'chrome'
//   },

//   framework: 'jasmine',

//   specs: ['../tests/calculator.js'],

//   jasmineNodeOpts: {
//     defaultTimeoutInterval: 30000
//   }
// }

import {browser, Config} from "protractor";

export const config: Config = {
  seleniumAddress: "http://127.0.0.1:4444/wd/hub",
  baseUrl: "https://www.sbzend.ssls.com",
  SELENIUM_PROMISE_MANAGER: false,

  capabilities: {
      browserName: "chrome"
  },
  specs: [
      "../tests/*Test.js",
  ],
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
  }
};