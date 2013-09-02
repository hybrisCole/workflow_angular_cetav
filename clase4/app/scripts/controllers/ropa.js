'use strict';

angular.module('cetavLavanderiaApp')
  .controller('RopaCtrl', ['$scope','$routeParams','usuarioFactory','$filter', function ($scope,$routeParams,usuarioFactory,$filter) {
    $scope.nuevaRopa = {};
    $scope.usuario = usuarioFactory.buscarPorSlug($routeParams.slug);

    $scope.$watch('nuevaRopa.peso',function(newValue,oldValue){
      $scope.nuevaRopa.precio = newValue * 750;
    });

    $scope.agregarRopaSubmit = function(){
      $scope.nuevaRopa.fechaEntrega = $filter('date')($scope.fechaEntrega,'yyyy-MM-dd');
      $scope.nuevaRopa.fechaRecibida = $filter('date')($scope.fechaRecibida,'yyyy-MM-dd');
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

    $scope.fechaRecibida = new Date();
    $scope.fechaEntrega = new Date();

    $scope.dateOptions = {
      'year-format': "'yy'",
      'starting-day': 1
    };
  }]);
