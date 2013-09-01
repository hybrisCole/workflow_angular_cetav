'use strict';

angular.module('cetavLavanderiaApp', ['ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/usuarios', {
        templateUrl: 'views/usuarios.html',
        controller: 'UsuariosCtrl'
      })
      .when('/ropa/:slug', {
        templateUrl: 'views/ropa.html',
        controller: 'RopaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
