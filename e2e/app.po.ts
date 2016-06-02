export class Ng2appPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2app-app h1')).getText();
  }
}
