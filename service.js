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
    
});