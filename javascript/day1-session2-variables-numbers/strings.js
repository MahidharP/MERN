var source = 'Bangalore';
var destination = "Mysore";
var distance = 150;
var timeTaken = '3 hours and 30 mins';

// String concatenation 

console.log('The distance from ' + source + ' to' + destination + ' is' + distance + 'kms and the time taken is ' + timeTaken);

// ES6 Feature
// Template String 

console.log(`The distance from ${source} to ${destination} is ${distance + 15} kms and time taken is ${timeTaken}`);

console.log(source.length); // 9 
console.log(source.toUpperCase()); // 'BANGALORE'

console.log(destination.toLowerCase()); // 'mysore'

var sentence = 'now is the time for all good people';

console.log(sentence.indexOf('good')); // 24
console.log(sentence.indexOf('bad')); // -1 

// Boolean methods

console.log(sentence.includes('good'));  // True
console.log(sentence.includes('bad'));  // False

var name = 'aniruddha';
console.log(name[0].toUpperCase + name.slice(1));  // 'Aniruddha'