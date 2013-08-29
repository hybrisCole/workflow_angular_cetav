'use strict';

angular.module('cetavLavanderiaApp')
  .controller('UsuariosCtrl', ['$scope','usuarioFactory', function ($scope,usuarioFactory) {
    $scope.usuarios = usuarioFactory.listado();
  }]);
