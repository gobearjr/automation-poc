const { client } = require('nightwatch-cucumber');
const { Given, When, Then } = require('cucumber');

// const browser = client.page.facebook.facebook_create_pages_page();
const browser = client.page.testcafe_page();

// Given(/^User is at testcafe homepage$/, () => {
//   return page.navigateToPage();
// });

Given(/^User is at testcafe homepage$/, () => browser.navigateToPage());

When(/^User enter "([^"]*)" at testcafe page$/, value => browser.input(value));

When(/^User click "([^"]*)" at testcafe page$/, value => browser.clickActions(value));

Then(/^User can see final result in Result page$/, () => browser.verifyResult());
