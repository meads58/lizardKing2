describe('LizardKingController', function() {
  beforeEach(module('LizardKing'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('LizardKingController', {
      $scope: scope
    });
  }));

  describe('when clicked', function(){

    it('can choose a image', function(){
      spyOn(Math, "random").and.returnValue(0);
      scope.getImage();
      expect(scope.newImageLeft).toEqual('https://thechive.files.wordpress.com/2008/12/funny-hilarious-bird-pics-pictures12.jpg?quality=94&strip=all')
    });

    it('', function(){

    })

  });
});