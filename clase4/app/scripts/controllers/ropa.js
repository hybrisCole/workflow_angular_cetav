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
      $scope.nuevaRopa = {};
    };

    $scope.eliminarRopa = function(){
      usuarioFactory.eliminarRopa($routeParams.slug,$scope.ropaAEliminar);
      $scope.modalEliminarRopa = false;
    }

    $scope.modalOpts = {
      backdropFade: true,
      dialogFade:true,
      keyBoard:true
    };

    $scope.openModalEliminarRopa = function (ropa) {
      $scope.ropaAEliminar = ropa;
      $scope.modalEliminarRopa = true;
    };

    $scope.closeModalEliminarRopa = function () {
      $scope.modalEliminarRopa = false;
    };
  }]);
