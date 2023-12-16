var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('This is Anjali');
}).listen(8080,'192.168.0.157');