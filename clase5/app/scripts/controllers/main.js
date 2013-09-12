'use strict';

angular.module('ToDoRESTApp')
  .controller('MainCtrl',['$scope','todoFactory', function ($scope,todoFactory) {
    $scope.todosCargados = false;
    todoFactory.listado().then(function(data){
      $scope.todosCargados = true;
      $scope.todos = data;
    });

    //MOdal
    $scope.modalOpts = {
      backdropFade: true,
      dialogFade:true,
      keyBoard:true
    };

    $scope.openModalAgregarTodo = function(){
      $scope.modalAgregarTodo = true;
    };

    $scope.closeModalAgregarTodo = function(){
      $scope.modalAgregarTodo = false;
    }

    $scope.agregarTodo = function(){
      $scope.nuevoTodo.status = false;
      todoFactory.crear($scope.nuevoTodo).then(function(){
        $scope.modalAgregarTodo = false;
        $scope.nuevoTodo = {};
        todoFactory.listado().then(function(data){
          $scope.todos = data;
        });
      });
    };

    $scope.eliminar = function(todo){
      todoFactory.eliminar(todo._id).then(function(){
        todoFactory.listado().then(function(data){
          $scope.todos = data;
        });
      });
    };

    var actualizar = function(todo){
      todoFactory.actualizar(todo).then(function(){
        todoFactory.listado().then(function(data){
          $scope.todos = data;
        });
      });
    };

    $scope.marcarListo = function(todo){
      todo.status = true;
      actualizar(todo);
    };

    $scope.marcarPorHacer = function(todo){
      todo.status=false;
      actualizar(todo);
    }
  }]);
