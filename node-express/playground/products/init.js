const { Product } = require('./product');
const { User } = require('./user');
const func = require('./file1');
const person  = require('./file2');

let p1 = new Product({name: 'marker', price: 15});
console.log(p1.details());

let u1 = new User({username: 'Mahidhar', email: 'mahidharreddy10@gmail.com'});
console.log(u1.details());

console.log(func());

console.log(person.details());