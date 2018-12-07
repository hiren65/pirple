/*
* Primary File for API
*
*/

//import and Show Dependencies file
var http = require('http');
var url = require('url');
//createServer calling function with perameters from Dependencies
//Server should respond to all request with string
var server = http.createServer(function(req,res){
 //get url and parse interval i.e. gives full path
  var parsedUrl = url.parse(req.url,true);
 //get the path i.e. dives untimmed path
  var path = parsedUrl.path;
 // gives trimmed path
  var trimmedPath = path.replace(/^\/+|\/+$/g,'');

 //send response
   res.end('Hello world \n');
 // log the request path
   console.log("Request has received on path " + trimmedPath);

});
//Start the server and print message on which port server
// listening request
server.listen(3000,function(){
	console.log('The Server is listeing on port 3000 now');
});
