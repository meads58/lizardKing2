describe('lizard King', function() {

  beforeEach(function() {
    browser.get("http://localhost:3000");
  });

  describe('title', function() {

    it('has the title lizard king.', function() {
      expect(browser.getTitle()).toEqual("Lizard King");
    });



  });


});