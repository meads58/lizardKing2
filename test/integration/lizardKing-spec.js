describe('lizard King', function() {


  beforeEach(function() {
    browser.get("http://localhost:3000");
  });

  describe('landing page', function() {

    it('has the title lizard king.', function() {
      expect(browser.getTitle()).toEqual("Lizard King");
    });

    it('should display two pictures', function() {
      expect(element(by.model('images-left')).isPresent()).toBe(true);
      expect(element(by.model('images-right')).isPresent()).toBe(true);
    });
  });


});