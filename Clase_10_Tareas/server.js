var http = require('http');
var fs = require('fs');
var url = require('url');

function respuestaError404(response){

	response.writeHead(404, {"Contex-Type":"text/plain"});

	response.write("Error 404 - Pagina no existe...atontao en app2");
	response.end();
}

function callBack(request,response){


	if(request.method == 'POST'){


		var queryData = url.parse(request.url,true).query;

		console.log('Post message recive');
		console.log(queryData);

		if (queryData.nombre == 'Pepa' && queryData.password == '1245') { // se va a ejecutar por el true

			//Respuesta
			response.writeHead(200, {"Contex-Type":"text/html"});
			fs.createReadStream("./OK.xml").pipe(response);

		} else {

			//Respuesta
			response.writeHead(200, {"Contex-Type":"text/html"});
			fs.createReadStream("./Error.xml").pipe(response);
		} 
	} else {

 		respuestaError404(response);

 	}
}
		

http.createServer(callBack).listen(8888);
console.log("Servidor en marcha");

