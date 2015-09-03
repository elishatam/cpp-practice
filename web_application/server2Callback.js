//HTTP Server Code
//Open up http://localhost:8888/ on a browser

//This requires the http module that ships with Node.js. Makes it accessible through the variable http.
var http = require("http");

//When a request is received, writeHead sends an HTTP status 200 and content-type in the HTTP response header.
//response.write sends text in the HTTP response body
function onRequest(request, response){ //request and response = objects
  console.log("Request received."); //Printed when we request our server. 
                                    //Maybe output twice b/c most browsers try to load the favicon
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

//Call one of the functions (createServer) the http module offers
//This function returns an object. The object has a method named 'listen'
//'listen' takes a numeric value = port number our HTTP server is going to listen on
http.createServer(onRequest).listen(8888);       //Pass the createServer function an anonymous function

console.log("Server has started."); //At start, this will be printed.



