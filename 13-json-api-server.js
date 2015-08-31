var http = require('http');
var url = require('url');

var listenPort = process.argv[2];

var server = http.createServer(
    function(req, res) {
      if(req.method != 'GET') {
        return res.end('Sorry bro, gimme HTTP GET only');
      }
    
      var reqInfo = url.parse(req.url, true);
      var isoTime = reqInfo.query.iso;

      if(reqInfo.pathname === '/api/parsetime') {
        // return the ISO time in JSON
        var dateTime = new Date(isoTime);
        var responseDate = { 
          hour: dateTime.getHours(),
          minute: dateTime.getMinutes(),
          second: dateTime.getSeconds()
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(responseDate));
        res.end();
      }

      if(reqInfo.pathname === '/api/unixtime') {
        // return the unixtime in JSON
        var dateTime = new Date(isoTime);
        var responseDate = { unixtime: dateTime.getTime() };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(responseDate));
        res.end();
      }
    }
);

server.listen(listenPort);

/*

simulate HTTP GET with

curl http://localhost:8000/api/parsetime?iso\=2013-08-10T12:10:15.474Z

curl http://localhost:8000/api/unixtime?iso\=2013-08-10T12:10:15.474Z 

---

node -pe "require('url').parse('/test?q=foo', true)"

---

official solution:

* not sure i like the .test() way of comparing
* i have the write header/boidy code repeated and am not handling a invalid route like the official solution, i like how theyve done that
* nice how they have seperated the unix and JSON repose bits into functions - i think i was in a hurry which is why i have bunged it together

 var http = require('http')
    var url = require('url')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime : time.getTime() }
    }
    
    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result
    
      if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
      else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)
    
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))


*/
