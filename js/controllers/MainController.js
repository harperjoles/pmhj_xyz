app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Top Sellers in Books';
  $scope.examples = [ 
  { 
    icon: 'img/move.jpg', 
    title: 'MOVE', 
    developer: 'MOVE, Inc.', 
    price: 0.99 
  }, 
  { 
    icon: 'img/shutterbugg.jpg', 
    title: 'Shutterbugg', 
    developer: 'Chico Dusty', 
    price: 2.99 
  },
    { 
    icon: 'img/move.jpg', 
    title: 'blah', 
    developer: 'MOVE, Inc.', 
    price: 0.99 
  }, 
  { 
    icon: 'img/shutterbugg.jpg', 
    title: 'blah as well', 
    developer: 'Chico Dusty', 
    price: 2.99 
  } 
]
}]);