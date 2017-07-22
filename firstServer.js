var http = require("http");

var PORTone = 7000;

var PORTtwo = 7500;

var server = http.createServer(handleRequest);

function handleRequest(request, response){
	response.end("It works! Path: " + request.url);
}

server.listen(PORTone, PORTtwo, function(){
	console.log("The back of yo head is ridiculous");

	console.log("You suck");
});
