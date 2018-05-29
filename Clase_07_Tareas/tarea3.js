// Crea un programa que llame repetidamente, cada 5 segundos a una funcion
// que imprima por consola el directorio y el nombre del archivo
// Ademas tiene que guardar en el sistema de archivos del scrip que ejecuta

setInterval(function(){

//console.log("Brrr");

console.log(__dirname);
console.log(__filename);

var fs = require('fs');

fs.appendFileSync("log.txt","Soy un pesado");

console.log(fs.readFileSync("log.txt").toString());




},3000)