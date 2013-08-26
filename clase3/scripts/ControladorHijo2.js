/**
 * Created with JetBrains WebStorm.
 * User: hybris
 * Date: 8/26/13
 * Time: 11:14 AM
 * To change this template use File | Settings | File Templates.
 */
'use strict';
myApp.controller('ControladorHijoDos', ['$scope', function($scope){
  $scope.ejectuarEmit = function(){
    $scope.$emit('someEvent',"Hola!");
  }
}]);