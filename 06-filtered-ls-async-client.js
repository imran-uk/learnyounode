var filesByExtension = require("./06-filtered-ls-async-module.js");

var fileDir = process.argv[2];
var fileExt = process.argv[3];

var printFileList = function(matchFileArray) { 
  matchFileArray.forEach(
      function(item) { console.log(item); }
  );
}

filesByExtension(
  fileDir,
  fileExt,
  printFileList
);
