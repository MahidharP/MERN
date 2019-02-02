var n1 = 10;
var n2 = 20;

function add(n1, n2){
    //shadowing if the variables
    n1 = 100;
    n2 = 200;
    // return n1 + n2 + n3; ReferenceError (n3 is not in the function scope nor in global scope)
}

console.log(add(n1, n2));


function add1(n1, n2){
    var result = n1  + n2;
    return result;
}

console.log(add(n1, n2));
// console.log(result); throws an Reference Error - here result is defined inside the add function and hence not available outside the function.