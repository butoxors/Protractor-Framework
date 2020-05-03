import {browser, Config} from "protractor";
import conf from "../resources/configuration.json"

var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html',
});

export const config: Config = {
  seleniumAddress: "http://127.0.0.1:4444/wd/hub",
  SELENIUM_PROMISE_MANAGER: false,
  capabilities: {
      browserName: conf.browserName,
      shardTestFiles: true,
      maxInstances: 3
  },
  specs: [
      "../specs/*Test.js",
  ],
  framework: "jasmine",
  onPrepare: () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
    browser.manage().window().maximize();
    browser.driver.get(conf.url);
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(true);
  }
};