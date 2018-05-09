// Tarea1: Crear un objeto en Node.js.


var objeto = {};
  // Crea una funcion en Node.js
function multiplicar(){


return a * b;

}

// Crea una funcion que imprima un objeto que se pase por parametro.


 
function imprimir(objeto) {


console.log(objeto);

}


 var objeto = imprimir("Pepito");





 
// Tarea2: Crear una funcion que reciba una funcion como parametro, a su vez esta debe
//reenviar esa funcion a un supuesto servicio que ejecutara la funcion pasada al transcurrir un tiempo determionado
// La funcion pasada  que sera llamada por el servicio debe recibir dos parametros y devolver la suma de estos.


function llamarServidor (llamada) { 




setTimeout(llamada,5000); //Realiza llamada y  sperqa 5 segundos

}

// Realiza una peticion al servidor

function pedirPeticion(sum){  // Recibe  como parametro una funcion (sum)


 
 llamarServidor(function(){ // Funcion  que se llama a si misma , anonima


  console.log(" Termine de sumar: ",sum); // recibe el valor  de sum pasado el tiempo de setTimeout


});


}

function sum (a,b){

  return a + b;

}

 
var x = sum(7,8);
pedirPeticion(x);




 
 
 
