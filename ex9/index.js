/*
* Primary File for API
*
*/

//import and Show Dependencies file
var http = require('http');
var url = require('url');
var StringDecoder = require('string_decoder').StringDecoder;
var config  = require('./config');

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

    //chhose the handler this request should go to. If one is not found use the notFound handlet
    var chosenHandler = typeof(router[trimmedPath]) !== 'undefined' ? router[trimmedPath] : handlers.notFound;

    //construct data object to send to the handler
    var data = {
        'trimmedPath' : trimmedPath,
        'queryStringObject' : queryStringObject,
        'method' : method,
        'headers' : header,
        'payload' : buffer
    };

    //Route the request to the handler  specified in the router
     chosenHandler(data,function(statusCode,payload){
      //use the status code by the handler, or default to 200
      statusCode = typeof(statusCode) == 'number' ? statusCode : 200;
      //use the payload callback by the handler or default to an empty objejct
      payload = typeof(payload) == 'object' ? payload : {} ;
      // convert the payload to string
      var payloadString = JSON.stringify(payload);
      res.setHeader('Content-Type','application/json');
      //return response
      res.writeHead(statusCode);
      //send response
       res.end(payloadString);
       // log the request path
       console.log( 'Returning this response ',statusCode,payloadString);


    });

  });


});
//Start the server and print message on which port server
// listening request
//request should be done like localhost:3000/foo?tada=gigo&hpatel=gjgj
//i used Postman a software
//Start the server
server.listen(config.port,function(){
	console.log("The Server is listeing on port " + config.port + " in " + config.envName + " mode");
});

//Define handlers
var handlers = {};

//Sample handlers
handlers.sample = function(data,callback){
   //call back a http status code, and pay load objejct
    callback(406,{'name':'sample handler'});
};
//Not found handlers
handlers.notFound = function(data,callback){
    callback(404);
};
//Define a request router
var router = {
  'sample' : handlers.sample
};
