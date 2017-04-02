import { RxjsExamplesPage } from './app.po';

describe('rxjs-examples App', () => {
  let page: RxjsExamplesPage;

  beforeEach(() => {
    page = new RxjsExamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
