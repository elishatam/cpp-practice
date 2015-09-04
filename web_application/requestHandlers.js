//This is a request handler
function start() {
  console.log("Request handler 'start' was called.");
  return "Hello Start";
}

//This is a request handler
function upload() {
  console.log("Request handler 'upload' was called.");
  return "Hello Upload";
}

exports.start = start;
exports.upload = upload;
