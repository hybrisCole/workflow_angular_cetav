'use strict';

angular.module('cetavLavanderiaApp')
  .controller('UsuariosCtrl', ['$scope','usuarioFactory', function ($scope,usuarioFactory) {
    $scope.usuarios = usuarioFactory.listado();

    $scope.modalOpts = {
      backdropFade: true,
      dialogFade:true,
      keyBoard:true
    };

    $scope.closeModalAgregarUsuario = function () {
      $scope.modalAgregarUsuario = false;
    };

    $scope.openModalAgregarUsuario = function () {
      $scope.modalAgregarUsuario = true;
    };

    $scope.nombreRegex = /^[a-z ,.'-]+$/i;

    $scope.nuevoUsuario = {};

    $scope.agregarUsuarioSubmit = function(){
      usuarioFactory.agregar($scope.nuevoUsuario);
      $scope.nuevoUsuario = {};
    };
  }]);
