// Functions are first class citizens

var n1 = 10;
var n2 = 20;
var add = function(n1,n2){ // anonymous function
    return n1 + n2;
}

console.log(add); // referring to the function
console.log(add()); // invoking of functions

// HIGHER ORDER FUNCTIONS - WHENEVER WE PASS FUNCTION AS AN ARGUMENT TO ANOTHER FUNCTION

// function expression
var dispay = function(msg){
    console.log(msg);
};

function displayMessage(display){
    display('Ive been called inside an displayMessage function');
    console.log('Im back inside the display message function');
}

console.log(displayMessage(dispay));

//function declaration 
// function displayNumber(n){
//     console.log(n);
// }

var displayNumber = function(n){
    console.log(n);
}

var numbers = [10,20,30,40];
numbers.forEach(displayNumber);