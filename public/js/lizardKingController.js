var lizardKingApp = angular.module('LizardKing', ['ngRoute']);

lizardKingApp.controller('LizardKingController', function($scope){
  $scope.countLeft = 0;
  $scope.countRight = 0;

  $scope.image_bank = [
    "https://thechive.files.wordpress.com/2008/12/funny-hilarious-bird-pics-pictures12.jpg?quality=94&strip=all",
    "http://infusionsoftva.com/wp-content/uploads/2014/09/hilarious-pictures.jpg",
    "http://r.fod4.com/http://p.fod4.com/p/media/c81a6839b7/NSaD49Y5TVC5VSdXiGiM_f1.jpg",
    "http://www.pictures1.org/wp-content/uploads/2012/06/funny-Photos.jpg"
      ];

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
    $scope.newImageLeft = $scope.image_bank[randomImage()];
  };

   $scope.getRightImage = function() {
    $scope.newImageRight = $scope.image_bank[randomImage()];
  };

  $scope.voteLeft = function() {
    $scope.countLeft += 1;
  };

  $scope.voteRight = function() {
    $scope.countRight += 1;
  };

  $scope.superLeft = function() {
    $scope.getImage();
    $scope.voteLeft();
  };

   $scope.superRight = function() {
    $scope.getImage();
    $scope.voteRight();
  };

  $scope.getImage();

});