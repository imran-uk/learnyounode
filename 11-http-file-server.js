var http = require('http');
var fs = require('fs');

var listenPort = process.argv[2];
var fileName = process.argv[3];

console.log(listenPort, fileName);

var server = http.createServer(
    function(req, res) {
      var src = fs.createReadStream(fileName);
      src.pipe(res);
    }
);

server.listen(listenPort);

/* official solution

    var http = require('http')
    var fs = require('fs')
    
    var server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })
    
      fs.createReadStream(process.argv[3]).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))
*/
