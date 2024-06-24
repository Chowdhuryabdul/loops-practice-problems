/* for(var i = 0; i <= 7; i++){
    console.log(i)
} */

// EventTarget: display every element of any array  
var numbers = [45, 87, 89, 56, 32, 51, 25, 98, 41];
for(var i = 0; i < numbers.length ; i++){
    var number = numbers[i]
    console.log(number);
}

// one good point is that if i add more in the array it will not detact as i have alredy set 7. so i need to set name of the array and lenght (numbers.length) then it will take all the value in the array 

var itmes = ['airpod', 'mouse', 'mobile', 'computer', 'others', 'notebook'];
for(var i = 0; i < itmes.length; i++){
var item = itmes[i];
console.log(item)
}