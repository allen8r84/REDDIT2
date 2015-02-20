var app = angular.module('reddit');

app.controller('PostsController', function($scope, FirebaseService) {
    
  var getPosts = function() {
      FirebaseService.getPosts().then(function(data) {
          $scope.posts = data;
      });
  }
  getPosts();
    
});