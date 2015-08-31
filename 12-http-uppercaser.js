var http = require('http');
var map = require('through2-map');

var listenPort = process.argv[2];

var server = http.createServer(
    function(req, res) {
      req.setEncoding('utf8');

      req.pipe(
          map(function(chunk) {
              //return chunk.toString().split('').reverse().join('');
              return chunk.toString().toUpperCase();
            }
          )
        )
        .pipe(res);
    }
);

server.listen(listenPort);

/*

simulate HTTP POST with

curl --data "foo" http://localhost:8000

---

official solution below - note that i did not cater for POST only.
The tests seem odd here as they only input uppercase strings 
and POST requests it seems...

    var http = require('http')
    var map = require('through2-map')
    
    var server = http.createServer(function (req, res) {
      if (req.method != 'POST')
        return res.end('send me a POST\n')
    
      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))

*/


