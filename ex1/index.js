/*
* Primary File for API
*
*/

//import and Show Dependencies file
var http = require('http');
//createServer calling function with perameters from Dependencies
//Server should respond to all request with string
var server = http.createServer(function(req,res){
	//When rquest finsh print string
	res.end('Hello world \n');
});
//Start the server and print message on which port server
// listening request
server.listen(3000,function(){
	console.log('The Server is listeing on port 3000 now');
});
