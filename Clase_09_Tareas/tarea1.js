var http = require('http');
var fs = require('fs');
var url = require('url');



function send404Response(response){

//send a 404 response

response.writeHead(404, {"Contex-Type":"text/plain"});
response.write("Error 404 - Pagina no funciona atontao..en tarea1");
response.end();


}

function callBack(request,response){


	if(request.method == 'GET'){

		var queryData = url.parse(request.url, true).query; // Analizamos los datos de la URL y la query

		console.log(queryData);

	


		
		response.writeHead(200, {"Contex-Type":"text/html"});
		fs.createReadStream("./index.json").pipe(response);
	

	 } else {
		send404Response(response);

	}
}

http.createServer(callBack).listen(8888);
console.log("Servidor en marcha.....");