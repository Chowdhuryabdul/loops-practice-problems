
/* practice task -1
Display "aaj amar mon valo nai" for 39 times  */

/* var comment = 0
while(comment <= 39){
    console.log('aaj amar mon valo nei', comment)
    comment++
}

for (var comment = 0; comment <= 39; comment++){
    console.log('aaj amar mon valo nei')
} */

/* Practic task 2
Display numbers between 58 to 98 */

// var numbers = [58, 60, 65, 70, 75, 80, 85, 90, 95, 98]
// for(var i = 0; i <= numbers.length; i++){
//     var number = numbers[i];
//     console.log(number)
// }

/* Practic task -3
Show all the even numbers from 412 to 456  */

/* var number = 412;
while(number <= 456){
    console.log(number)
    number = number + 2
} */

/* for(var i = 412; i <= 456; i = i += 2){
         console.log(i)
} */

/* practice task 4
show all odd number from 581 to 623 */

// var number = 581;
// while(number <= 623){
//     console.log( number)
//     number = number + 2;
// }

// for(var i = 581; i <= 623; i = i += 2){
//     console.log(i)
// }

// practice task - 5 
// declare an array for all the topics that you have learned last fes days display as an output 

/* var tpoics = ['html', 'css', 'tailwind', 'daisy UI', 'and', 'others']
console.log(tpoics)
console.log(tpoics.length) */

// practic task 7

/* var phones = ['nokia', 'samsung', 'lg', 'xaomi', 'apple']
// console.log(phones)
var item = 0;
while(item <= phones.length){
    console.log(phones)
    item++

} */

// practice task 8

/* Run a loop from 30 to 86. this loop will stop if the values get higher than 44 */

/* var numbers = [30, 35, 40, 44, 50, 60, 70, 80, 86]
console.log(numbers.length)
for(var i = 0; i <= numbers.length; i++){
var item = numbers[i]
console.log(item)
if(item > 44){
    break;
}
} */

/*  practice-10
wrtie the price of the books that you have. display prices if the price is higher than 200. you will skip those. */

/* var prices =[230, 200, 330, 150, 159, 180, 179, 201, 230, 154, 178]
for(var i = 0; i <= prices.length; i++){
    var book = prices[i]
    if (book > 200){
        continue
    }
console.log(book)
} */

// to slice the index in Array

var numbers = [1, 30, 9, 5, 6, 8]
// var cut = numbers.slice(1,3,)
var cut = numbers.slice(-2)
console.log(cut)
console.log(numbers.length)


// to check the string something inside a string--
var point = 'ariana grande is singing'
console.log(point.includes('Grande'))

// to check substring- it means it will check the each and every letter of word
console.log(point.substring(0,5))
