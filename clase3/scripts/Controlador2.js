/**
 * Created with JetBrains WebStorm.
 * User: hybris
 * Date: 8/26/13
 * Time: 11:14 AM
 * To change this template use File | Settings | File Templates.
 */
'use strict';
myApp.controller('ControladorDos', ['$scope','$rootScope', function($scope, $rootScope){

  $scope.$on('someBroadCast', function(event, data) { console.log(data); });

  $scope.textoMiScope = "Hola Controlador2";
  $scope.actualizarRootModel = function(){
    $rootScope.rootModel = "Modificado por Controlador2";
  }
}]);
