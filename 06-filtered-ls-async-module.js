var fs = require("fs");
var path = require("path");

module.exports = function(fileDir, fileExt, printFileList) {
 
  var matchList = [];

  function getFilteredFileList(err, fileList) {
    if(err)
      return printFileList(err);

    var formattedFileExt = "." + fileExt;

    function filterEntry(element) {
      var extension = path.extname(element);

      if(extension === formattedFileExt) {
        matchList.push(element);
      }
    }

    fileList.filter(filterEntry);

    printFileList(err, matchList);
  }

  fs.readdir(fileDir, getFilteredFileList);
};

