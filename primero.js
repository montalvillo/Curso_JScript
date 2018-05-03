var x = 20;
var y = 60;
var z = x + y;

console.log(z);

var foo = 40;
var bar = "Bar";
var zip = true;

console.log(bar  + foo + zip); // muestra  todas la variables



function saludo () {


console.log("Hola Mundo")

}

saludo();


 function sum1 (x,y){

  

return x + y ;

 }

 var result1 = sum1(40,50);


 	console.log(result1);
 

    
  function sum2(x,y){


return x + y;

  }

  var result2 = sum1("Jose","Maria");

  console.log(result2);

// declñaracion de funcion anonioma

  (function(){

console.log("Funcion Anonima , se llama a si misma");

  }	) ();   // declaracion () de la funcion anonima


  // crea una nueva (new ) clase


var myFuntion1 = new Function("a","b", "return a * b"); // crea una nueva (new ) clase

  	var x1 = myFuntion1(4,3);

  	console.log(x1);


//crea una nueva funcion sin crear una clase


  
var myFuntion2 = function (a,b){  


	return a * b;
}


var x2 = myFuntion2(4,3);

console.log(x2);


// funcion que devuelve el numero de argumentos
function myFuntion3  (a,b) { // a y b no son los argumentos que se le pasan


	return arguments.length ;
}

console.log(myFuntion3(1,2,3,4)); // se pasan 4 argumentos a lña funcion imprime 4


// Metodo toString retorna una cadena de texto


function myFunction4 (a,b) {

return a * b;

}

 var texto = myFunction4.toString();

 console.log(texto); // devuelve como cadena de texto "retrun a * b" 


//  LLamar a una funcion como un metodo

// Este ejemplo crea un objeto myObject5 con dos propiedades (fristName y lastName) y un metodo (fuellName)

var myObject5 = {


fristName: "Juan",

lastName: "Garcia",

fuellName: function () {


	return this.fristName + " "  + this.lastName;
}


}

myObject5.fuellName(); // retorna Juan  Garcia

console.log(myObject5.fuellName());



// Funcion con el metodo call 


function myFuction6 (a,b){

	return a * b
}

var myObject6 = myFuction6.call(myObject6,10,2); // devuelve  los argumentos por separado
 
console.log("Esto es con call: " + myObject6); // imprime 20


// Funcion con el metodo apply

function myFuction7(a,b) {


return a * b

}


//Funcion con el metodo apply

function myFuction8 (a,b,c) {


return a * b * c


}

 var myArray = [10,2,4]; // declaracion de un array

 var myObject8 = myFuction8.apply(myFuction8,myArray); // llamada al metodo apply


console.log(" Esto es con aplly: " + myObject8); // devuelve 20 



