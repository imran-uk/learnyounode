var http = require('http');
var concat = require('concat-stream');

var count = 0;
var callbackData = [];
var urlArray = process.argv.slice(2, 5);

function printData(url, index, array) {
  http
  .get(url, function(res) {
    res.setEncoding('utf8');

    res.pipe(concat(function(data) {
      callbackData[index] = data;

      count++;

      // TODO
      // i was doing (callbackData.length === 3) here - why did that work?
      if(count === 3) {
        callbackData.forEach(
            function(pageData, pageDataIndex, pageDataArray) {
              console.log(pageData);
            }
        );
      }
    }));
  })
  .on('error', function(e) { console.log("Got error: " + e.message); })
}

urlArray.forEach(printData);

/* official solution

    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0
    
    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)
    
          results[index] = data.toString()
          count++
    
          if (count == 3)
            printResults()
        }))
      })
    }
    
    for (var i = 0; i < 3; i++)
      httpGet(i)

*/
