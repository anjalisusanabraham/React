var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('Hello this is your node4.js file');
    res.end();
}).listen(8000);