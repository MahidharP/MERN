var numbers = [11, 10, 12, 15, 18];

function findEvens(numbers) {
    var output = [];
    // numbers.forEach(function(num){
    //     if (num % 2 === 0) {
    //         output.push(num);
    //     }
    // });
    for (var i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 === 0){
            output.push(numbers[i]);
        }
    }
    return output;
}

console.log(findEvens(numbers));