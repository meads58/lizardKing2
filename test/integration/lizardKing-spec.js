describe('lizard King', function() {


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

    xit('should update the vote counter when submitting vote', function() {
      $('.button.left').click();

      expect($('.counter.left')).toEqual(1);
    });

  });

  describe('changes the images', function(){

    it('when left funnier? button is clicked', function(){
      var link = $('.images.left').getAttribute("src");
      $('.button.left').click();
      waits(2000)
      expect(link).toNotEqual($('.images.left').getAttribute("src"))
    });


  });


});

