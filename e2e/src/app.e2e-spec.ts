import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { AppEnum } from './app.enum';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText(0).getText()).toEqual('my-app app is running!');

  });

  it('should check paragraph message', () => {
    page.navigateTo();
    expect(page.getParagraph(0).getText()).toEqual('Here are some links to help you get started:');
  });

  it('should check icons titles', () => {
    expect(page.getIcon(AppEnum.Animations).getAttribute('title')).toEqual('Animations');
    expect(page.getIcon(AppEnum.CLI).getAttribute('title')).toEqual('CLI');
    expect(page.getIcon(AppEnum.Augury).getAttribute('title')).toEqual('Augury');
    expect(page.getIcon(AppEnum.Protractor).getAttribute('title')).toEqual('Protractor');
    expect(page.getIcon(AppEnum.FindALocalMeetup).getAttribute('title')).toEqual('Find a Local Meetup');
    expect(page.getIcon(AppEnum.JoinTheConversationOnGitter).getAttribute('title')).toEqual('Join the Conversation on Gitter');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
