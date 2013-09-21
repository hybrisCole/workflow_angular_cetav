'use strict';

angular.module('cetavChatApp')
  .controller('MainCtrl', function ($scope,socket) {

    $scope.mensajes = [];

    $scope.loginChat = function(){
      socket.emit('chat:registrar',$scope.mailUsuario,function(data){
        $scope.loggedIn = data;
      });
    }

    socket.on('chat:lista',function(listaUsuarios){
      $scope.usuarios = listaUsuarios;
    });

    $scope.enviarMensaje = function(){
      if($scope.mensaje.indexOf('/w') === 0){
        var destinatario = $scope.mensaje.split(' ')[1],
            mensaje = $scope.mensaje.replace('/w '+destinatario,'');

        socket.emit('chat:susurro',{
          mensaje:mensaje,
          usuarioDestinatario:destinatario
        });

      }else{
        socket.emit('chat:todos',{
          mensaje:$scope.mensaje,
          usuario:$scope.mailUsuario
        });
      }
      $scope.mensaje = '';
    }

    socket.on('chat:mensaje',function(mensaje){
      $scope.mensajes.push(mensaje);
    });

    socket.on('chat:whisper',function(mensaje){
      $scope.mensajes.push(mensaje);
    });

  });
