class loginPage {
  get loginBtn() {
    return $(
      "#app > div > header > div > div > div > div.app-header__user-menu > div:nth-child(2) > div > a"
    );
  }
  async loginBtnClick() {
    await this.loginBtn.waitForDisplayed();
    await this.loginBtn.isClickable();
    await this.loginBtn.click();
  }
}
module.exports = new loginPage();
