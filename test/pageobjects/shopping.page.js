class shoppingPage {
  get getStarted() {
    return $(
      "#app > div > header > div > div > div > div.app-header__user-menu > div:nth-child(3) > button"
    );
  }
  get welcomeP() {
    return $("p.swui-h3.get-started__title");
  }
  get fullListBtn() {
    return $(
      "#app > div > main > div > div > section.app-section.top-table.tw-table > div > div > div.top-table__cta > a"
    );
  }
  async getStartedBtn() {
    await this.getStarted.waitForDisplayed();
    await this.getStarted.isClickable();
    await this.getStarted.click();
  }
  async getFullListBtn() {
    await this.fullListBtn.waitForDisplayed();
    await this.fullListBtn.isClickable();
    await this.fullListBtn.click();
  }
}
module.exports = new shoppingPage();
