var lizardKingApp = angular.module('LizardKing', ['ngRoute']);

lizardKingApp.controller('LizardKingController', ['$scope', function($scope){

  $scope.image_bank = bank;

  randomImage = function() {
    var bankSize = $scope.image_bank.length;
    return Math.floor(Math.random() * bankSize)
  };

  $scope.getImage = function() {
    $scope.getLeftImage()
    $scope.getRightImage()

    if ($scope.newImageLeft == $scope.newImageRight){
      $scope.getImage()
    }
  };

  $scope.getLeftImage = function() {
    $scope.leftIndex = randomImage()
    $scope.newImageLeft = $scope.image_bank[$scope.leftIndex].url;
  };

  $scope.getRightImage = function() {
    $scope.rightIndex = randomImage()
    $scope.newImageRight = $scope.image_bank[$scope.rightIndex].url;
  };

  $scope.voteLeft = function() {
    $scope.image_bank[$scope.leftIndex].count += 1
  };

  $scope.voteRight = function() {
    $scope.image_bank[$scope.rightIndex].count += 1
  };

  $scope.superLeft = function() {
    $scope.voteLeft();
    $scope.getImage();
  };

  $scope.superRight = function() {
    $scope.voteRight();
    $scope.getImage();
  };

  $scope.getImage();

}]);