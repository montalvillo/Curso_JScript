var http = require('http');
var fs = require('fs');

function send404Response(response){

//send a 404 response

response.writeHead(404, {"Contex-Type":"text/plain"});
response.write("Error 404 - Pagina no funciona atontao en app..");
response.end();


}

function callBack(request,response){


	if(request.method == 'GET' && request.url == '/'){


		

		
		//Proceso de repuesta
		response.writeHead(200, {"Contex-Type":"text/html"});
		fs.createReadStream("./tarea0.xml").pipe(response);

		

	} else {
		send404Response(response);

	}
}


http.createServer(callBack).listen(8888);

console.log("Servidor en marcha.....");



