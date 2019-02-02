// Primitive type - numbers, strings, undefined, null
// just values, doesnt hold any properities or methods 

// object type - arrays, objects, functions
// are valyes, that has properities and methods 
// numbers = [10, 20, 30]
// numbers.push(40);

var n1 = 10, n2 = 19.3, n3 = 21.8;

//property
console.log(Math.PI);

// Method
// Round rounds to which ever near by number(Lesser or greater)
console.log(Math.round(n2)); // 19 
console.log(Math.round(n3)); // 22


// Floor rounds to previous near by number
console.log(Math.floor(n2)); // 19
console.log(Math.floor(n3)); // 21


// Ceil rounds to next near by number
console.log(Math.ceil(n2)); // 20

console.log(n1,n2,n3);
//reassignment 
n2 = Math.ceil(n2);
console.log(n2);

console.log(Math.abs(-10)); // 10 

// Type conversions
var a1 = '45';
var a2 = 37;
var a3 = 64.4;
var a4 = '56.7';

console.log(typeof a1); // 'string'
console.log(typeof a2); // 'Number'
console.log(typeof a3); // 'Number'

var c1 = Number(a1);
console.log(c1); // 45 -> 'Number'

var c2 = String(a2);
console.log(c2); // '37' -> 'String'

var c3 = Number(a4);
console.log(c3); // 56.7 -> 'Number'

var c4 = parseInt(a4);
console.log(c4); //56 -> 'Number' 

var findMax = Math.max(10,20,30,40,100);
console.log(findMax);

var findMin = Math.min(10,20,30,40);
console.log(findMin);

var numbers = [10, 20, 30, 40, 50];
var findMaxInArr = Math.max(numbers); 
console.log(findMaxInArr);  // NaN - Not a Number

// Spread Operator - ES6 
console.log(Math.max(...numbers));

// pre ES6
console.log(Math.min.apply(null, numbers));
