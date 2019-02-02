var numbers = [10, 15, 20, 25, 30];

// function firstGreaterThan(numbers, num){
//     var result;
//     for (var i = 0; i < numbers.length; i++){
//         if (numbers[i] > num){
//             result = numbers[i];
//             break;
//         }
//     }
//     return result;
// }

// console.log(firstGreaterThan(numbers, 15));

function findGreater(numbers, num){
    //es-5
    var result = numbers.find(function(n){
        return n > num;
    });
    return result;
    // es-6
    return numbers.find(n => n > num);
}

console.log(findGreater(numbers,15));