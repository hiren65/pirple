/*
* Primary File for API
*
*/

//import and Show Dependencies file
var http = require('http');
var url = require('url');
var StringDecoder = require('string_decoder').StringDecoder;
//createServer calling function with perameters from Dependencies
//Server should respond to all request with string
var server = http.createServer(function(req,res){
 //get url and parse interval i.e. gives full path
  var parsedUrl = url.parse(req.url,true);
 //get the path i.e. dives untimmed path
  var path = parsedUrl.pathname;
 // gives trimmed path
  var trimmedPath = path.replace(/^\/+|\/+$/g,'');

  // get the query string as an object
   var queryStringObject = parsedUrl.query;

  //get the http method ||park royal hotel||
  var method = req.method.toLowerCase();

  //get header sa an queryStringObject

  var header = req.headers;

  //Get a payload, if any

  var decoder = new StringDecoder('utf-8');
  var buffer = ''; //creating empty string_decoder
  //event when data payload sreaming
  req.on('data',function(data){
    buffer += decoder.write(data);
  });
  // event payload ends
  req.on('end',function(){
    buffer += decoder.end();
    //send response
     res.end('Hello world \n');
    // log the request path
     console.log( ' request received with payload  ',buffer);
  })


});
//Start the server and print message on which port server
// listening request
//request should be done like localhost:3000/foo?tada=gigo&hpatel=gjgj
//i used Postman a software
server.listen(3000,function(){
	console.log('The Server is listeing on port 3000 now');
});
