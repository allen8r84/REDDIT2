var app = angular.module('reddit');

app.service('FirebaseService', function($http, $q) {
    
    this.getPosts = function(){
        var deferred = $q.defer();
        $http.get('https://devmtn.firebaseio.com/posts.json').then(function(res) {
            res = res.data;
            deferred.resolve(res);
        });
        return deferred.promise;
    }
    
    this.postData = function(newPost) {
        newPost.timestamp = Date.now();
        newPost.comments = [];
        newPost.karma = 0;
        newPost.id = guid();
        
        var deferred = $q.defer();
        $http.put('https://devmtn.firebaseio.com/posts/' + newPost.id + '.json', newPost).then(function(res) {
            deferred.resolve(res);
        });
        return deferred.promise;
    };
    
  var guid = function() {
    var s4 = function() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
    
});