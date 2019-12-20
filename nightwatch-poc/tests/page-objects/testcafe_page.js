/* eslint no-unused-vars: off */

const env = require('dotenv').config();
const { client } = require('nightwatch-cucumber');
const base = require('bizzy-nightwatch-base-page');

const page = {
  url: function setUrl() {
    const url = base.setURL(`${process.env.BASE_URL}/testcafe/example/`);
    return url;
  },
  testData: {
    assertTitle: 'This webpage is used as a sample in TestCafe tutorials.',
    populate: 'Populate',
    result: 'https://devexpress.github.io/testcafe/example/thank-you.html',
  },
  elements: {
    header: '.main-content',
    textFieldName: '#developer-name',
    textComment: '.comments',
    btnPopulate: '#populate',
    checkboxRemote: '.remote-testing',
    checkboxReusing: '.re-using',
    checkboxBackgroundPararel: '.background-parallel-testing',
    checkboxCI: '.continuous-integration-embedding',
    checkboxTraffic: '.traffic-markup-analysis',
    checkboxTry: '.tried-test-cafe',
    btnSubmit: '#submit-button',
    radioWindow: '.windows',
    radioMac: '.macos',
    radioLinux: '.linux',
    listInterface: '.preferred-interface',
    assetResult: '.result-content',

  },
  commands: [{
    navigateToPage() {
      base.maxWindow(client);
      return this.navigate();
    },
    clickActions(btnName) {
      // base.pauseSleep(client, 500);
      switch (btnName) {
        case 'Populate':
          base.clickButtonOptional(this, client, page.elements.btnPopulate);
          break;
        case 'Submit':
          base.clickButtonOptional(this, client, page.elements.btnSubmit);
          break;
        default:
      }
    },

    input(keyActivity) {
      return base.setValueTextField(this, page.elements.textFieldName, keyActivity);
    },

    verifyResult() {
      // return base.assertURLContains(page.testData.result);
    },

  }],
};

module.exports = page;
