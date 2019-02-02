var name;

console.log(name);

// variables can hold Strings, numbers, arrays, objects, undefined, null

var city = 'Bangalore';

console.log(city);

var temperature = 28.4;

var population = 1000000;

var placesToVisit = ['Mg Road', 'Lalbagh', 'Cubbon park'];

var person = {
    firstName: 'Mahidhar',
    lastName: 'P'
}

console.log(person);

// console.log(person.firstName);

//function
//function expression
// functions in JS are treated as first class citizens

var details = function() {
    return 'I\'m a function'
}


//Refering to a function
//console.log(details);

//Invoking
console.log(details());