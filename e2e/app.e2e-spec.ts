import { TutorialAngularStylingClarityPage } from './app.po';

describe('tutorial-angular-styling-clarity App', function() {
  let page: TutorialAngularStylingClarityPage;

  beforeEach(() => {
    page = new TutorialAngularStylingClarityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
