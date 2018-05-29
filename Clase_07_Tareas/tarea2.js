
var fs = require('fs');

fs.writeFileSync("nombre.txt","Esto es lo que se graba dentro del archivo");

console.log(fs.readFileSync("nombre.txt").toString());