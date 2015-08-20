//console.log(process.argv);

var total = 0;
var argz = process.argv;

argz.forEach(sumNumbers);

function sumNumbers(element, index, array) {
  if(index < 2) { return; }

  total += Number(element);
}

console.log('the total is: ', total);
