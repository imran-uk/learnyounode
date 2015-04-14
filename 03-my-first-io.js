var fs = require("fs");

var newlineCount = 0;

//console.log(process.argv);
var argz = process.argv;

var fileName = process.argv[2];

var fileContent = fs.readFileSync(fileName);
newlineCount = fileContent.toString().split("\n").length;

//console.log(fileName);

console.log("hello!");
console.log(newlineCount - 1);


/*
    var fs = require('fs')
    
    var contents = fs.readFileSync(process.argv[2])
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)
    
    // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
*/
