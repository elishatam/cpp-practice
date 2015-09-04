function route(handle, pathname, response, postData) {
  console.log("About to route a request for " + pathname);
  //Check if a requet handler for the given pathname exists
  if (typeof handle[pathname] === 'function') { 
    handle[pathname](response, postData); //If yes, call the function. "Please handle this pathname"
  } else {
    console.log("No request handler found for " + pathname);
    //Instead of expecting a return value from our request handlers, we pass the respond object on
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not found");
    response.end();
  }
}

exports.route = route;
