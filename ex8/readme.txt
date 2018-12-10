

down vote
accepted
It sounds like your error comes from an attempt to run something like this (which works in Linux)
////////////////////////////////for linux and mac///////////////////////////
NODE_ENV=development node foo.js
the equivalent in Windows would be
/////////////////////////////////for window ///////////////////////////
SET NODE_ENV=development
node foo.js
//////////////////////////////////////////////////////////////
running in the same command shell. You mentioned set NODE_ENV did not work, but wasn't clear how/when you executed it.
