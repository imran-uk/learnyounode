var http = require('http');

var url = process.argv[2];

http.get(
    url, 
    function (response) {
      response.setEncoding('utf8');
      response.on(
          'data', 
          function(data) { 
            console.log(data);
          }
      );

      response.on(
          'error',
          function(error) {
            console.log("Shit, there was an error: ", error);
          }
      );

      response.on(
          'end',
          function() {
            //console.log('this is the end...');
          }
      );
    }
);
