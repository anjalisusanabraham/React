var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    // res.end(req.url);
    if(req.url == '/home'){
    //    res.write('this is home');
    res.write("<h1>This is home</h1>");
       res.end(); 
    }
    if(req.url == '/product'){
        res.write('This is my product page');
        res.end();
    }
   
}).listen(8080);