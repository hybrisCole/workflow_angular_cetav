'use strict';

angular.module('ToDoRESTApp')
  .factory('todoFactory', ['$http','$q',function ($http,$q) {

    //var url = 'http://localhost:3000/todo';
    var url = 'http://hybriscole-cetavnode.jit.su/todo';

    // Public API here
    return {
      listado: function () {
        var defer = $q.defer();
        $http({method: 'GET', url: url}).
          success(function(data, status, headers, config) {
            defer.resolve(data);
          }).
          error(function(data, status, headers, config) {
            defer.resolve(data);
          });
        return defer.promise;
      },
      crear: function(todo){
        var defer = $q.defer();
        $http({method: 'PUT', url: url, data:todo}).
          success(function(data, status, headers, config) {
            defer.resolve(data);
          }).
          error(function(data, status, headers, config) {
            defer.resolve(data);
          });
        return defer.promise;
      },
      eliminar: function(id){
        var defer = $q.defer();
        $http({method: 'DELETE', url: url+'/'+id}).
          success(function(data, status, headers, config) {
            defer.resolve(data);
          }).
          error(function(data, status, headers, config) {
            defer.resolve(data);
          });
        return defer.promise;
      },
      actualizar: function(todo){
        var defer = $q.defer();
        console.log(todo);
        $http({method: 'POST', url: url+'/'+todo._id, data:todo}).
          success(function(data, status, headers, config) {
            defer.resolve(data);
          }).
          error(function(data, status, headers, config) {
            defer.resolve(data);
          });
        return defer.promise;
      }
    };
  }]);
