//This is a request handler
function start() {
  console.log("Request handler 'start' was called.");
}

//This is a request handler
function upload() {
  console.log("Request handler 'upload' was called.");
}

exports.start = start;
exports.upload = upload;
