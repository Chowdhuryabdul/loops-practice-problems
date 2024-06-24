// to stop loop in the certain point

// for(var i = 1; i <= 20; i++){
//     console.log(i)
//     // if i want to stop the loop in a certain Pointe. i need to follow this rule ...
//     if(i > 10){
//         break;
//     }
// }

// this is with the 'while'
var roastGiven = 1;
/* while(roastGiven < 10){
    console.log('roast den gift aansi', roastGiven);
    roastGiven++
    if(roastGiven > 6){
        break;
    }
} */

/* how to do the break in the array with the string  */
var items = ['roast', 'polau', 'whiterice', 'meatkorai', 'others']
/* for(var i = 0; i < items.length; i++){
 var item = items[i]
 console.log(item)
 if(item == 'meatkorai'){
    break;
 }
} */

/* var numbers = [10, 20, 30, 40, 50, 110, 60, 70, 80, 81, 90]
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i]
    if(number > 100) {
        break;
    }
    console.log(number)
} */


var items = ['computer', 'mouse', 'airpod', 'laptop', 'screen']
for(var i = 0; i < items.length; i++){
   var item = items[i];
    console.log(item)
    if(item == 'airpod'){
        break;
    }
}

