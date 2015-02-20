var app = angular.module('reddit');

app.controller('PostsController', function($scope, FirebaseService) {
    
  var getPosts = function() {
      FirebaseService.getPosts().then(function(data) {
          $scope.posts = data;
      });
  }
  getPosts();
  
  $scope.addPost = function() {
      FirebaseService.postData($scope.newPost).then(function(res){
          getPosts();
          $scope.resetForm();
      });
  };
  
  $scope.resetForm = function() {
      $scope.newPost = {};
  }
  
  setInterval(function(){
      getPosts();
  }, 1500);
    
});