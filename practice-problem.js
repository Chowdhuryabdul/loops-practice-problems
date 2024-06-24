// practice -1 in the module 18-8 

var moneyGiven = 1000;
var applePrice = 400;
var ornagePrice = 300
var expense = applePrice + ornagePrice;
var totalPrice = expense - 1000;
console.log(totalPrice)

// practice - 2 

var mathMark = 75.25;
var biologyMark = 65;
var chemistryMark = 80;
var physicsMark = 35.45
var banglaMark = 99.50

var totalMark = mathMark + biologyMark + chemistryMark + physicsMark +banglaMark
console.log(totalMark)

var avergeMark = totalMark / 5;
console.log(avergeMark)
//  to express the two decimal 
var avergeTwoDecimal = avergeMark.toFixed(2)
console.log(avergeTwoDecimal)

// to turn the avergeTwoDecimal into integar 
var integar = parseInt(avergeTwoDecimal);
console.log(integar)

// to connect two sentences 

var firstComment = 'i am going to be';
var secondComment = 'an awsome web developer'
var wholeComment = firstComment + ' ' + secondComment;
console.log(wholeComment)

// how to get the reminder 

var firstNumber = 119;
var reminder = firstNumber % 5;
console.log(reminder)