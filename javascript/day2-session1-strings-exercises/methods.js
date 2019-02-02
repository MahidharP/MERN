// function numFormatter(numbers) {
//     var num1 = numbers.slice(0,3);
//     var num2 = numbers.slice(3,6);
//     var num3 = numbers.slice(6);
//     return (`(${num1}) ${num2}-${num3}`)
// }

// var numbers = '1234567890';

// console.log(numFormatter(numbers));


function numFormatter(numbers) {
    var num1 = numbers.substr(0,3);
    var num2 = numbers.substr(3,3);
    var num3 = numbers.substr(6);
    return (`(${num1}) ${num2}-${num3}`)
}

var numbers = '1234567890';

console.log(numFormatter(numbers));