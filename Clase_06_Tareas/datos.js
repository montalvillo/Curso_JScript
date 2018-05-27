//Tarea 1

//Crea una clase que tenga 5 métodos y 3 propiedades.

//Utilizando el diccionario por defecto modules.exports exporta (o expón públicamente) 2 métodos y una de estas variables o propiedades.

//Uno de los métodos debe devolver el valor de una variable que debe permanecer “privada".

//requiere Importa el módulo que has creado y ejecuta la aplicación en un archivo diferente. Ej: app.js


function librosClaves () {

	function libroEspañol() {

   console.log("Titulo: La sombra del viento");
   console.log("Autor: Carlos Ruiz Zafon");


	};

	function libroIngles() {

		console.log("Titulo: The Century");
		console.log("Autor: Ken Follett");
};


	function libroEEUU () {


  	console.log("Titulo: The Leader");
  	console.log("Autor: Harold Robbins")

};


	function libroRuso () {

		console.log("Titulo: Archipiélago Gulag");
		console.log("Autor:  Aleksandr Solzhenitsyn");


};

// Func privada
 var private = function verFavorito () {

 	console.log("Privada");

	};



libroFavorito: "La sombra del viento"
autorFavorito:"Carlos Ruiz Zafon"
categoriaFavorita:"Novela"

//exports la variable libroFavorito

module.exports = {

libroFavorito: "La sombra del viento"

},
//exports metodo
module.exports.libroespañol = libroEspañol;
module.exports.libroruso = libroRuso;
 	

};
var mis = librosClaves();




