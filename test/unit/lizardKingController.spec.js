describe('LizardKingController', function() {
  beforeEach(module('LizardKingVote'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('LizardKingController', {
      $scope: scope
    });
  }));

  describe('when clicked', function(){

    it('can choose a random image', function(){
      
    });
    
  });
});