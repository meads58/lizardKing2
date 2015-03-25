describe('LizardKingController', function() {
  beforeEach(module('LizardKing'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('LizardKingController', {
      $scope: scope
    });
  }));


  describe('landing page', function() {

    it('should add a vote to the left pic', function() {
      scope.voteLeft();
      scope.voteLeft();
      scope.voteLeft();
      expect(scope.countLeft).toEqual(3);
     });

    it('should add a vote to the right pic', function() {
      scope.voteRight();
      scope.voteRight();
      expect(scope.countRight).toEqual(2);
     });
  });

  describe('when clicked', function(){

    it('when clicked it selects a left image', function() {
      spyOn(Math, "random").and.returnValue(0);
      scope.getLeftImage();
      expect(scope.newImageLeft).toEqual('https://thechive.files.wordpress.com/2008/12/funny-hilarious-bird-pics-pictures12.jpg?quality=94&strip=all')
    });

    it('when clicked it selects a right image', function() {
      spyOn(Math, "random").and.returnValue(0);
      scope.getRightImage();
      expect(scope.newImageRight).toEqual('https://thechive.files.wordpress.com/2008/12/funny-hilarious-bird-pics-pictures12.jpg?quality=94&strip=all')
    });

    it('can choose two images', function(){
      spyOn(scope, "getLeftImage")
      spyOn(scope, "getRightImage")
      scope.getImage();
      expect(scope.getLeftImage).toHaveBeenCalled()
      expect(scope.getRightImage).toHaveBeenCalled()
    });

  });

});