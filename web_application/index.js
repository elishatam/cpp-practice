var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

//pass the list of requestHandlers as an object
//In order to achieve loose coupling, inject this object into the route()
var handle = {}
handle["/"] = requestHandlers.start; //map a different URL to the same request handler.
handle["/start"] = requestHandlers.start; // requests to /start will be handled by the start handler
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);
