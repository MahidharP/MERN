// console.log(require('./data')); // returns object
// console.log(quote); // reference error as the variable is not there 
// const fileData = require('./data'); // object assigned to var
// console.log(fileData.quote); //invoking one of the properity 

//make it avaliable as independent variable
// const quote = require('./data').quote

//Do it in ES6 way of obg destructuring

const {quote, name, city, add} = require('./data');
console.log(quote, name, city);   