var http = require('http');
var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the eventhandler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');
http.createServer(function(req,res){
    // res.writeHead(200,{'Content-type':'text/html'});
    // res.write('Welcome to your node5');
    res.end();
}).listen(8000);