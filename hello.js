var http = require('http');
var os = require("os");


http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello World\n'+os.hostname()+' - '+os.platform()+' '+os.arch()+' '+os.release()+' - '+os.uptime()+'\n');
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');
