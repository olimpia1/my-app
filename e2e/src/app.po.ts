import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(index: number): ElementFinder {
    return element.all(by.css('app-root div.content div.card span')).get(index);
  }

  getParagraph(index: number): ElementFinder {
    return element.all(by.css('app-root div.content p')).get(index);
  }

  getIcon(index: number): ElementFinder {
      return element.all(by.css('app-root div[role="main"] div.card-container a.circle-link')).get(index);
    }
}
