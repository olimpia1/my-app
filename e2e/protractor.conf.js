// @ts-nocheck

// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    browser.ignoreSynchronization = false;
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    return browser.getProcessedConfig().then((caps) =>{
      let session = caps.capabilities;
      let today = new Date();
      let timeStamp = today.getFullYear() + '.' + (today.getMonth() + 1) + '.' + today.getDate() + '-' + today.getHours() + '.' + today.getMinutes() + '.' + today.getSeconds();
      jasmine.getEnv().addReporter(
          new Jasmine2HtmlReporter({
              takeScreenshots: true,
              takeScreenshotsOnlyOnFailures: true,
              fixedScreenshotName: true,
              screenshotsFolder: 'screenshots ' + timeStamp,
              savePath: 'report',
              fileName: timeStamp,
              fileNamePrefix: 'TestReport-' + session.browserName,
              cleanDestination: true
          })
      );
  });
  }
};
