// string type variable 
var bottole = 'water';
var bottoleColor = 'yellow'
// number type variable
var sunglassPrice = 120;
var penColor = 'blue';
// Boolean type variable
var isExpensive = 'true'

// Array 

var tableItems = ['book', 'bottole', 'khata', 'pen', 'paper']

// to find item 
var items3 = tableItems[3];
// console.log(items3)
// to change item 
tableItems[4] = 'notekhata';
// console.log(tableItems)

var penIndex = tableItems.indexOf('pen')
// console.log(penIndex)

var penColor = ['red', 'blue', 'black', 'pink', 'green']
var color3 = penColor[4];
console.log(color3)

penColor[4] = 'salmon'
console.log(penColor)

var blackIndex = penColor.indexOf('black')
console.log(blackIndex)

penColor.push('white')
console.log(penColor)
penColor.pop();
console.log(penColor);

penColor.unshift('yellow');
console.log(penColor)

penColor.shift('yellow')
console.log(penColor)


