describe('lizard King', function() {
  var lzardVotes =

  beforeEach(function() {
    browser.get("http://localhost:3000");
  });

  describe('landing page', function() {

    it('has the title lizard king.', function() {
      expect(browser.getTitle()).toEqual("Lizard King");
    });

    // it('it should update the vote count when voting', function() {
    //   element(by.model('[value="button"]')).click();
    //   expect(lizardVotes.count()).toEqual(1);
    // });

  });

  describe('changes the images', function(){

    it('when left funnier? button is clicked', function(){
      var link = $('.images_l').getAttribute("src");
      $('.button_left').click();
      expect(link).toNotEqual($('.images_l').getAttribute("src"))
    });

  });


});