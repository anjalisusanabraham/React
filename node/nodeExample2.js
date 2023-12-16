var http = require('http');
var url = require('url');
http.createServer(function(req,res){
    res.writeHead(200, {'content-type':'text/html' });
    // res.end('Hello world');
    if(req.url == '/home'){
        res.write("Hello This is my Home page");
        res.end();
    }
    if(req.url == '/product'){
        res.write('Hello this is my product page');
        res.end();
    }
}).listen(8000);