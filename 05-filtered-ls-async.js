var fs = require("fs");
var path = require("path");

var extensionFilter = "." + process.argv[3];

var getFilteredFileList = function getFilteredFileList(err, list) {
  if(err) { throw err };

  list.forEach(filterEntry);
  
  function filterEntry(element, index, array) {
    var extension = path.extname(element);

    if(extension === extensionFilter) {
      console.log(element);
    }
  }
}

// gotcha: if getFilteredFileList is defined after this async call then it will
// fail silently
fs.readdir(process.argv[2], getFilteredFileList);
