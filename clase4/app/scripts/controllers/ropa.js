'use strict';

angular.module('cetavLavanderiaApp')
  .controller('RopaCtrl', ['$scope','$routeParams','usuarioFactory', function ($scope,$routeParams,usuarioFactory) {
    $scope.nuevaRopa = {};
    $scope.usuario = usuarioFactory.buscarPorSlug($routeParams.slug);

    $scope.$watch('nuevaRopa.peso',function(newValue,oldValue){
      $scope.nuevaRopa.precio = newValue * 750;
    });

    $scope.agregarRopaSubmit = function(){
      usuarioFactory.agregarRopa($routeParams.slug,$scope.nuevaRopa);
      $scope.usuario = usuarioFactory.buscarPorSlug($routeParams.slug);
      $scope.nuevaRopa = {};
    };

  }]);
