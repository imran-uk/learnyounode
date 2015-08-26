var net = require('net');
var strftime = require('strftime');

var listenPort = process.argv[2];

var server = net.createServer(
    function(socket) {
      socket.write(strftime('%F %R') + '\n');
      socket.end();
    }
);

server.listen(listenPort);

/* official answer

    var net = require('net')
    
    function zeroFill(i) {
      return (i < 10 ? '0' : '') + i
    }
    
    function now () {
      var d = new Date()
      return d.getFullYear() + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes())
    }
    
    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })
    
    server.listen(Number(process.argv[2]))

*/
