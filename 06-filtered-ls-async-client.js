var filesByExtension = require("./06-filtered-ls-async-module.js");

// run it with dis:
// node 06-filtered-ls-async-client.js filez txt
// node 06-filtered-ls-async-client.js filez mp3

var fileDir = process.argv[2];
var fileExt = process.argv[3];

var printFileList = function(err, matchFileArray) { 
  if(err) { return console.error("Oh shit: " +  err) };

  matchFileArray.forEach(
      function(item) { console.log(item); }
  );
}

filesByExtension(
  fileDir,
  fileExt,
  printFileList
);
