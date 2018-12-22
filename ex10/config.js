/*
 *Create and export configuration variables
 *
 */

//Container for all enviroments
 var environments = {};

 //Stagging (default) enviroment
 environments.staging = {
   'httpPort' : 3000,
   'httpsPort' : 3001,
   'envName' : 'staging'
 };

 //Production enviroment
 environments.production = {
   'httpPort' : 5000,
   'httpsPort' : 5001,
   'envName' : 'production'
 };
//Determine wich enviroment was passed as a command line argument
var curentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';
//check that curent enviroment is one of the enviroments above. if not, default to staging
var environmentToExport = typeof(environments[curentEnvironment]) == 'object' ? environments[curentEnvironment] : environments.staging;
//export the module
module.exports = environmentToExport;
