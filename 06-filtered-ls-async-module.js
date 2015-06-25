var fs = require("fs");
var path = require("path");

module.exports = function(fileDir, fileExt, callback) {
 
  var matchList = [];

  function getFilteredFileList(err, fileList) {
    if(err)
      return callback(err);

    var formattedFileExt = "." + fileExt;

    function filterEntry(element, index, array) {
      var extension = path.extname(element);

      if(extension === formattedFileExt) {
        matchList.push(element);
      }
    }

    fileList.forEach(filterEntry);

    callback(err, matchList);
  }

  fs.readdir(fileDir, getFilteredFileList);
};

