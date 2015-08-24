var http = require('http');
var concat = require('concat-stream');

var url = process.argv[2];

http
.get(url, function(res) {
  res.setEncoding('utf8');
  res.pipe(concat(function(data) { 
    console.log(data.length);
    console.log(data);
  }));
})
.on('error', function(e) { console.log("Got error: " + e.message); })

// official answer
/*
    var http = require('http')
    var bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))  
    })
*/
