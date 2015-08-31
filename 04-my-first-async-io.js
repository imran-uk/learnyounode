var fs = require("fs");

var getNewlineCount = function getNewlineCount(err, data) {
  if(err) { throw err };

  console.log(
      //'newlines in ' + process.argv[2] + ':', 
      data.toString().split("\n").length - 1
  );
}

var fileContent = fs.readFile(
    process.argv[2], 
    { encoding: "utf8" }, 
    getNewlineCount
);

/* 

official solution

    var fs = require('fs')
    var file = process.argv[2]
    
    fs.readFile(file, function (err, contents) {
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })

*/
