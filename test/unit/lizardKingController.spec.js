describe('LizardKingController', function() {
 beforeEach(module('LizardKingVote'));

 var scope, ctrl;

 beforeEach(inject(function($rootScope, $controller) {
   scope = $rootScope.$new();
   ctrl = $controller('LizardKingController', {
       $scope: scope
   });
 }));
});