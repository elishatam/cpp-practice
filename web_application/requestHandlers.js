//New Node.js module = child_process. Gives us a simple yet useful non-blocking operation: exec()
var exec = require("child_process").exec;

//This is a request handler
function start(response) {
  console.log("Request handler 'start' was called.");
  
  //Get a list of all files in the current directory ("ls -lah")
  //Display this list in the browser of a user requesting the /start URL
  //exec("ls -lah", function (error, stdout, stderr){
  //find is an expensive operation
  exec("find /",
    { timeout: 10000, maxBuffer: 20000*1024 },
    function (error, stdout, stderr) {
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write(stdout);
      response.end();
    });
}
  
  

//This is a request handler
function upload(response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end();
}

exports.start = start;
exports.upload = upload;
