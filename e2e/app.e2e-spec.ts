import { Angular2DIExamplePage } from './app.po';

describe('angular2-di-example App', function() {
  let page: Angular2DIExamplePage;

  beforeEach(() => {
    page = new Angular2DIExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
