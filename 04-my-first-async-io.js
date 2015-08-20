var fs = require("fs");

var getNewlineCount = function getNewlineCount(err, data) {
  if(err) { throw err };

  console.log(
      'newlines in ' + process.argv[2] + ':', 
      data.toString().split("\n").length - 1
  );
}

var fileContent = fs.readFile(
    process.argv[2], 
    { encoding: "utf8" }, 
    getNewlineCount
);
