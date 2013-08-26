/**
 * Created with JetBrains WebStorm.
 * User: hybris
 * Date: 8/26/13
 * Time: 11:14 AM
 * To change this template use File | Settings | File Templates.
 */
'use strict';
myApp.controller('ControladorUno', ['$scope','$rootScope', function($scope,$rootScope) {
  $scope.$on('someEvent', function(event, data) { console.log(data); });

  $rootScope.rootCounter = 0;
  $rootScope.$watch('rootModel', function() {
    $rootScope.rootCounter += 1;
  });
  $scope.textoMiScope = "Hola Controlador1";
  $scope.actualizarRootModel = function(){
    $rootScope.rootModel = "Modificado por Controlador1";
  }

  $scope.enviarBroadcast = function(){
    $rootScope.$broadcast('someBroadCast','Adios!');
  }
}]);