var myNinjaApp = angular.module('myNinjaApp',['ngRoute']);

myNinjaApp.config(['$routeProvider', function($routeProvider){

  $routeProvider
  .when('/home', {
    templateUrl: 'views/home.html'
  })
  .when('/directory',{
    templateUrl: 'views/directory.html',
    controller: 'NinjaController'
  }).otherwise({
    redirectTo: '/home'
  });

}]);

myNinjaApp.controller('NinjaController',['$scope', function($scope){

  $scope.removeNinja = function(ninja){
    var removeNinjaIndex = $scope.ninjas.indexOf(ninja);
    $scope.ninjas.splice(removeNinjaIndex,1);
  };

  $scope.addNinja = function(){
    $scope.ninjas.push({
      name: $scope.newninja.name,
      belt: $scope.newninja.belt,
      rate: parseInt($scope.newninja.rate),
      available: true
    });
    $scope.newninja.name = "";
    $scope.newninja.belt = "";
    $scope.newninja.rate = "";

  };
  $scope.ninjas = [
    {
      name: "Yoshi",
      belt: "Green",
      rate: "30",
      available: true,
      thumb: "content/images/yoshi.png"
    },
    {
      name: "Crystal",
      belt: "Yellow",
      rate: "40",
      available: true,
      thumb: "content/images/crystal.png"
    },
    {
      name: "Ryn",
      belt: "orange",
      rate: "90",
      available: false,
      thumb: "content/images/ryu.png"
    },
    {
      name: "Shaun",
      belt: "black",
      rate: "20",
      available: true,
      thumb: "content/images/shaun.png"
    }

  ];

  console.log(angular.toJson($scope.ninjas));
}]);
