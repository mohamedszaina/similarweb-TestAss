const shoppingPage = require("../pageobjects/shopping.page");
const registrationPage = require("../pageobjects/registration.page");

describe("eCommerce And Shopping Page Testing", () => {
  beforeEach(() => {
    browser.url("");
  });
  it("Checks if browser is on a page URL that contains a value", async () => {
    await expect(browser).toHaveUrlContaining("e-commerce-and-shopping");
  });
  it("Checks if website has a specific title that contains a value.", async () => {
    await expect(browser).toHaveTitleContaining(
      "Top eCommerce & Shopping Websites"
    );
  });
  it("Checks if GetStarted button is clickable", async () => {
    await shoppingPage.getStartedBtn();
    await shoppingPage.welcomeP.waitForDisplayed();
    await expect(shoppingPage.welcomeP).toHaveTextContaining("premium");
    await browser.pause(3000);
  });
  it("Checks if fullList button is clickable", async () => {
    await shoppingPage.getFullListBtn();
    await expect(browser).toHaveUrlContaining("registration");
    await expect(browser).toHaveTitleContaining("Register Now to ");
    await registrationPage.h2.waitForDisplayed();
    await expect(registrationPage.h2).toHaveTextContaining("free account");
    await browser.pause(3000);
  });
});
