import { SahayakaPage } from './app.po';

describe('sahayaka App', () => {
  let page: SahayakaPage;

  beforeEach(() => {
    page = new SahayakaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
