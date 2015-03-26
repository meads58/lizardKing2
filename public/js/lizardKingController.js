var lizardKingApp = angular.module('LizardKing', ['ngRoute']);

lizardKingApp.controller('LizardKingController', function($scope){
  $scope.newImageRight = []


 $scope.image_bank = [
  {
    url: "https://thechive.files.wordpress.com/2008/12/funny-hilarious-bird-pics-pictures12.jpg?quality=94&strip=all",
    count: 0
  },
  {
    url: "http://infusionsoftva.com/wp-content/uploads/2014/09/hilarious-pictures.jpg",
    count: 0
  },
  {
    url: "http://r.fod4.com/http://p.fod4.com/p/media/c81a6839b7/NSaD49Y5TVC5VSdXiGiM_f1.jpg",
    count: 0
  },
  {
    url: "http://www.pictures1.org/wp-content/uploads/2012/06/funny-Photos.jpg",
    count: 0
  }
  ]

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

});