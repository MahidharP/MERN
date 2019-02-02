var numbers = [10, 20, 15, 25, 30];

// function findEvens(numbers){
//     var evens = [];
//     numbers.forEach(function(num){
//         if (num % 2 === 0){
//             evens.push(num);
//         }
//     });
//     return evens;
// }

// console.log(findEvens(numbers));

// Declarative programming - implementation of functional programming
function evensFilter(numbers){
    //es5 - 2009
    var result = numbers.filter(function(num){
        return num % 2 == 0;
    });
    return result;
    // es6 - 2015
    // return numbers.filter(num => num % 2 === 0);
}

console.log(evensFilter(numbers));