import { EXAMPage } from './app.po';

describe('exam App', function() {
  let page: EXAMPage;

  beforeEach(() => {
    page = new EXAMPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
