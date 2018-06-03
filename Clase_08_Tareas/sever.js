//sever.js

//Crear un servidor

var http = require('http');

//En el directorio raiz

var fs = require ('fs');

 function callBack (request,response) {


 	request.method == 'GET' && request.url == '/';

 	response.writeHead(200, { "Contex-Type":"text/html"});
 	fs.createReadStream("./index.html").pipe(response);


 }

 http.createServer(callBack).listen(8888);

 console.log("Servidor en marcha");