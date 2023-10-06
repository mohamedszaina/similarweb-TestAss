const loginPage = require("../pageobjects/login.page");

describe("Login Page Testing", () => {
  beforeEach(() => {
    browser.url("");
  });
  it("Checks if login anchor is clickable ", async () => {
    await loginPage.loginBtnClick();
    await expect(browser).toHaveUrlContaining("login");
    await browser.pause(3000);
  });
});
