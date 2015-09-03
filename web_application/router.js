function route(handle, pathname) {
  console.log("About to route a request for " + pathname);
  //Check if a requet handler for the given pathname exists
  if (typeof handle[pathname] === 'function') { 
    handle[pathname](); //If yes, call the function. "Please handle this pathname"
  } else {
    console.log("No request handler found for " + pathname);
  }
}

exports.route = route;
