describe('lizard King', function() {
  var lzardVotes =

  beforeEach(function() {
    browser.get("http://localhost:3000");
  });

  describe('landing page', function() {

    it('has the title lizard king.', function() {
      expect(browser.getTitle()).toEqual("Lizard King");
    });

    it('should display two pictures', function() {
      expect($('.images.left').isPresent()).toBe(true);
      expect($('.images.right').isPresent()).toBe(true);
    });

    it('should update the vote counter when submitting vote', function() {
      element(by.className("button")).click();
      expect()
    });

  });

  describe('changes the images', function(){

    it('when left funnier? button is clicked', function(){
      var link = $('.images.left').getAttribute("src");
      $('.button.left').click();
      expect(link).toNotEqual($('.images.left').getAttribute("src"))
    });

  });


});

