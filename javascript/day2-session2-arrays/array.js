//arrays are ordered, integer indexed, collection of values

var names = new Array();
var fruits =[];
var names = ['ramesh', 'suresh', 'mahesh'];

var mixedTypes = [10, 15.5, 'ramesh', [10,20], true, undefined, ''];

console.log('names', names);
console.log(names[0]) // 'ramesh'
console.log(names[1]); // 'sueresh'

console.log(names[[10]]); // undefined

// Updating the value at the 0th index 
names [0] = 'ganesh';
console.log(names[0]); // 'Ganesh'
console.log('names', names);

console.log('fruits', fruits); 
fruits [0] = 'apple';
console.log('fruits', fruits);

//Property

console.log(fruits.length); // 1

console.log(typeof fruits); // 'object'
console.log(Array.isArray(fruits)); // true

//Methods 
//FIFO - First in First Out - Queue
//LIFO - Last In First Out - Stack

// Adding elemtnts to the end of the array - Push returns the new length of the array
fruits.push('water melon');
console.log('fruits', fruits);

fruits.push('strawberry', 'chickoo'); 
console.log('fruits', fruits);

//Adding elements at the begining of the array
//returns the new length of the array 
fruits.unshift('banana');
console.log('fruits', fruits);

//Remove from the end of the array a sigle element
//returns the removed element
console.log(fruits.pop());
console.log('fruits', fruits);

//remove from the begining of tha array
// returns the removed element
console.log(fruits.shift());
console.log('fruits', fruits);