import { Product1Page } from './app.po';

describe('product1 App', () => {
  let page: Product1Page;

  beforeEach(() => {
    page = new Product1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
