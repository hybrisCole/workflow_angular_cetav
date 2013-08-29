Codigo para la clase 4
================================

Asegurese de instalar la version v0.10.17 de nodejs, puede utilizar el Node Version Manager para manejar varias versiones
https://github.com/creationix/nvm.

* Ejecutar en la terminal: npm install -g yo
* Una vez instalado, hay que instalar el generador de angular con el siguiente comando: npm install -g generator-angular
* Ejecutar: yo angular cetav-lavanderia, esto crea el proyecto, va a salir un prompt pidiendo instalar
  Twitter Bootstrap con SASS+Compass, escogerlo de esa manera y tambien agregar el resource.
* Correr grunt server. Jugar con LiveReload.
* Revisar el codigo, ver la app.js y el routing.
* Agregar una vista y controlador con Yeoman ejecutando el comando: yo angular:route usuarios --minsafe
* Modificar el main con url a la ruta nueva
* Hacer la vista de usuarios con http://bootsnipp.com/snipps/select-users
* Crear un servicio que contiene los usuarios con el comando de la terminal yo angular:factory usuarioFactory --minsafe
* Explicacion de Servicios http://stackoverflow.com/questions/13762228/confused-about-service-vs-factory/13763886#13763886
* Agregar un JSON con listado de usuarios. http://jsfiddle.net/hybrisCole/k4u82/
* Agregar metodo listado al factory.
* Inyeccion de Dependencias al controlador de Usuarios
* Modificar la Vista de usuarios agregando un ng-repeat
* Hacer link a boton azul con #/ropa/:usuario.slug
* Crear el controlador y la vista para ver la ropa con: yo angular:route ropa --minsafe
* Inyectar $routeParams para obtener el parametro de slug, modificar el routing de ropa a /ropa/:slug.
  http://stackoverflow.com/questions/11534710/angularjs-how-to-use-routeparams-in-generating-the-templateurl
* Actualizar el listado de usuarios con este objeto: http://jsfiddle.net/hybrisCole/k4u82/2/
* Agregar function en el factory que se llame buscarPor(propiedad)
* Agregar al bower.json: "underscore":"1.5.1"
* Instalar underscore con bower ejecutando este comando: bower install
* Agregar un metodo llamado buscarPorSlug en usuarioFactory, y utilizar la funcion _.findWhere() de Underscore.
* Agregar un Titulo con el nombre de la Persona
* Copiar el HTML de http://bootsnipp.com/snipps/condensed-table-example
* ng-repeat con la informacion de las ropas, usar currency filter.
* Crear un form basado en http://bootsnipp.com/snipps/sign-up-form para agregar ropas, ponerlo al costado izquierdo
* Validar el form, poner type="date" y type="number"
* Codigo de submit del Form
* Agregar ng-submit al form
* Agregar metodo agregarRopa al factory de Usuarios

Ejercicios (Explicar):
-------------------------
* Agregar una columna en la tabla de Ropas (en la vista de ropa) que contenga un boton para eliminar las ropas. 30Min
  * Utilice el Dialog de Angular UI http://angular-ui.github.io/bootstrap/ para crear una confirmacion de si desea eliminar.
* Agregar un Formulario en el listado de Usuarios, para Agregar nuevos Usuarios. 30Min
  * El slug tiene que ser creado en base al nombre, alfanumerico y en minusculas
    (eliminar cualquier caracter del nombre, que no cumpla esta regla)
* Cambiar los input type="date" por el DatePicker de AngularUI 30Min

Tarea (Explicar):
-------------------------
* Utilice http://bootsnipp.com/snipps/poll-example Para crear una nueva ruta (usar Yeoman Angular Generator) con:
  * la cantidad de Kilos lavados por Mes (Utilice http://angular-ui.github.io/bootstrap/.
  * la cantidad de Kilos lavados por Usuario.