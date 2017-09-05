import { RTSPage } from './app.po';

describe('rts App', function() {
  let page: RTSPage;

  beforeEach(() => {
    page = new RTSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
