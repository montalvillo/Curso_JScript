//  Tarea 0: Crea en JavaScript una variable de tipo Boolean,Null,Number e String.
var verdadera = true;
var nula = null;
var numerica = 20;
var texto = "Juanito";
console.log(texto + " " + numerica + " " + nula + " " + verdadera);

//Tarea 1: Crea en JavaScript un array y un diccionario. El array debe tener elementos de distintos tipos.


var miArray = [ "Hola",24,true,"Salido",null];

var myDiccionari = { "uno":1,"dos":2,"tres":3};


// Tarea 2: Crear una funcion que reciba dos parametros y devuelva algun valor, asigna este a una variable.

function division(a,b){


return a/b;


}

var mivar = division(10,5);

console.log("El resultado es de la division es: " + mivar);

//Tarea 3. Crea una funcion anonima  que se auto-ejecute al ser declarada.

( function () { // se abre con un ( , puede tener parametros.

	console.log("La funcion es anonima: " + 4); 


}) (); // () Llama a la funcion.


// Tarea 4: Crea una funcion  y sobre esta  implementa la propiedad lentth y el metodo toString() de function.


function unaFuncion (a,b){



return arguments.length; // length es una propiedad


}

console.log("Devuelve el numero de argumentos: " + unaFuncion (1,2,3,4));


var texto = unaFuncion.toString(); // toString es un metodo ()

console.log(texto);

//Tarea 5: Crea un objeto que tenga 3 propiedadesa y 3 metodos


var miObjeto = { // Esto es un diccionario

valor1:10,  // Clave valor1 , valor 10
valor2:20,
valor3:30,

suma1: function () {

	return    this.valor1 + this.valor2 + this.valor3;

},
resta1: function () {


return this.valor3 - this.valor2 - this.valor1;



},


divi1: function() {


return ((this.valor3 / this.valor2) / (this.valor1));

}

}
  
  
  
console.log("Suma: " + miObjeto.suma1());
console.log("Resta: " +miObjeto.resta1());
console.log("Division: " + miObjeto.divi1()); 


//Tarea 6: Difderencia entre loa metodos call() y apply()

// Los dos metodos o funciones  sirven para llamar a otro metodo y el primer parametro es el objeto.
// 


function multiplicar  (x,y) {


return x * y


}


var myObject = multiplicar.call(myObject, 10,5); // El metodo call toma los argumentos por separado


console.log("Esto es un metodo call " + myObject);


var miArray1 = [ 10,5];


 var myObject1 = multiplicar.apply(myObject1,miArray1); // El metodo aplly toma  como argumento el array miArray

 console.log("Esto es un metodo apply: " + myObject1);





