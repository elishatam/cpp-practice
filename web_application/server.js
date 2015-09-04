//HTTP Server Code
//Open up http://localhost:8888/ on a browser

//This requires the http module that ships with Node.js. Makes it accessible through the variable http.
var http = require("http");
var url = require("url"); //provides the methods to extract different parts of a URL

//When a request is received, writeHead sends an HTTP status 200 and content-type in the HTTP response header.
//response.write sends text in the HTTP response body
//The start function lets us pass the route function by parameter. The handle object is also passed.
function start(route, handle){
  function onRequest(request, response){ //request and response = objects
    //Can now distinguish requests based on the URL path requested
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received."); //Printed when we request our server. 
                                      //Maybe output twice b/c most browsers try to load the favicon
    route(handle, pathname, response); //Pass the handle object on to the route() callback
  }
  
  http.createServer(onRequest).listen(8888);
  console.log("Server has started"); //At start, this will be printed
}

exports.start = start;




