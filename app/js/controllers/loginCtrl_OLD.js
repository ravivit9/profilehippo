define([], function() {
	return ['$scope', function loginCtrl($scope, $http) {     
    //al mo mento que le den click al ng-click doLogin() ejecutamos la funcion
    $scope.doLogin = function() {
        console.log('inside1');
        /* $http es similar a AJAX de jQuery con una funcionalidad muy similar pero lo que si son iguales es que son llamadas AJAX, elijes metodo, destino, datos a enviar etc.  */
        $http({
                //usaremos el metodo POST para enviar los datos
                method: 'POST', 
                //seleccionamos a  que URL llegara la informacion
                url: 'app/php/formulario.php',
                //codificamos el contenido
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                //esta es la informacion que vamos a mandar
                data: { 
                        'usuario': $scope.usuario, 
                        'contrasena': $scope.contrasena 
                     },
            }).
            // si la peticion ajax se realizo con exito se ejecuta success
            success(function(data, status) {

                $scope.data = data;
                if(data == 'FALSE'){
                    $scope.aviso = 'Usuario o contraseña invalidos';
                } else {
                    toogleDiv();
                }

            }).
            //si la peticion ajax NO fue exitosa se ejecuta error
            error(function(data, status) {
                $scope.data = data || "FALSE";
                $scope.status = status;  
                $scope.aviso = 'Ha pasado algo inesperado';
            });
    };
}

		// because this has happened asynchroneusly we've missed Angular's initial call to $apply after the controller has been loaded
		// hence we need to explicityly call it at the end of our Controller constructor
		$scope.$apply();
	}];
});

/* Con esta funcion escondemos el form de login y mostramos el saludo de bienvenida */
function toogleDiv(){
    $(".span5").slideUp('fast');
    $("loged").slideDown('slow').attr('ng-hide','false');
} 