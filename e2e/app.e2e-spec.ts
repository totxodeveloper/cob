import { COBPage } from './app.po';

describe('cob App', () => {
  let page: COBPage;

  beforeEach(() => {
    page = new COBPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
