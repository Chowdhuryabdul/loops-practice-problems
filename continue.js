var numbers = [12, 14, 50, 111, 30, 35, 50]
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 100 ){
        continue;
    }
    console.log(number)
}
