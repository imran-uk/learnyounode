var http = require('http');

var url = process.argv[2];

http.get(
    url, 
    function (response) {
      var responseData = [];
      //response.setEncoding('utf8');
      response.on(
          'data', 
          function(data) { 
            //console.log(data);
            responseData.push(data);
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
            console.log(responseData);
          }
      );
    }
);
