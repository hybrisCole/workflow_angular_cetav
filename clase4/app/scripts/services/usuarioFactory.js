'use strict';

angular.module('cetavLavanderiaApp')
  .factory('usuarioFactory', [function() {
    // Service logic
    // ...

    var usuariosJSON = [
      {
        slug: 'jresig',
        nombre:'John Resig',
        direccion: 'Vargas Araya, 25mts S Escuela Laboratorio',
        ropas:[
          {
            fechaRecibida:'2013-09-05',
            fechaEntrega:'2013-09-09',
            peso:8,
            precio: 4500
          },
          {
            fechaRecibida:'2013-09-11',
            fechaEntrega:'2013-09-12',
            peso:5,
            precio: 2500
          },
          {
            fechaRecibida:'2013-09-18',
            fechaEntrega:'2013-09-21',
            peso:6,
            precio: 3500
          }
        ]
      },
      {
        slug: 'aosmani',
        nombre:'Addy Osmani',
        direccion: 'Vargas Araya, 150 Mts E CR Canada',
        ropas:[
          {
            fechaRecibida:'2013-08-15',
            fechaEntrega:'2013-08-19',
            peso:8,
            precio: 4500
          },
          {
            fechaRecibida:'2013-08-24',
            fechaEntrega:'2013-08-26',
            peso:10,
            precio: 6000
          },
          {
            fechaRecibida:'2013-09-01',
            fechaEntrega:'2013-09-03',
            peso:6,
            precio: 3500
          }
        ]
      },
      {
        slug: 'pirish',
        nombre:'Paul Irish',
        direccion: 'Ciudad Cortes, 300 Mts S Escuela Nieborowsky',
        ropas:[
          {
            fechaRecibida:'2013-08-26',
            fechaEntrega:'2013-08-29',
            peso:5,
            precio: 3000
          },
          {
            fechaRecibida:'2013-09-05',
            fechaEntrega:'2013-08-08',
            peso:12,
            precio: 7500
          }
        ]
      },
      {
        slug: 'tjholo',
        nombre:'TJ Holowaychuk',
        direccion: 'San Pedro, Frente Macchu Picchu',
        ropas:[
          {
            fechaRecibida:'2013-08-07',
            fechaEntrega:'2013-08-09',
            peso:4,
            precio: 3000
          },
          {
            fechaRecibida:'2013-08-29',
            fechaEntrega:'2013-08-30',
            peso:14,
            precio: 8000
          }
        ]
      }
    ];

    // Public API here
    return {
      agregar: function(usuario){
        usuario.ropas = [];
        usuario.slug = usuario.nombre.replace(/ /g,"").toLowerCase();
        usuariosJSON.push(usuario);
      },
      listado: function() {
        return usuariosJSON;
      },
      buscarPorSlug: function(slug){
        return _.findWhere(usuariosJSON,{slug:slug});
      },
      agregarRopa: function(slug,ropa){
        var usuario = this.buscarPorSlug(slug);
        usuario.ropas.push(ropa);
      },
      eliminarRopa: function(slug,ropa){
        var usuario = this.buscarPorSlug(slug);
        usuario.ropas = _.difference(usuario.ropas,ropa);
      }
    };
  }]);
