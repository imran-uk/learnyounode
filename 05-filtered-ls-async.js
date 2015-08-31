var fs = require("fs");
var path = require("path");

// call: node 05-filtered-ls-async.js filez txt

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

/*

official solution

    var fs = require('fs')
    var path = require('path')
    
    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })


*/
