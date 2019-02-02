var person = {
    firstName: 'ravi',
    lastName: 'dl',
    city: 'bangalore',
    details: function(){
        return `${this.firstName} lives in ${this.city}`;
    }
}

console.log(person.firstName);
console.log(person['city']);
console.log(person.details());

console.log(Object.keys(person));
console.log(Object.values(person));

console.log(Object.keys(person).length)

// find out if a property exists
console.log(person.hasOwnProperty('firstname'));

//find out if an value exists
console.log(Object.values(person).includes('ravi'));

console.log(person.bio);

// loop over an object.
for (var key in person){
    console.log(key, person[key]);
}

//forEach
Object.keys(person).forEach(function(key){
    console.log(person[key]);
});

// deleting a property from an object
delete person['details'];
console.log(person);

//when an property to be added is in a variable
var newKey = 'bio';
person[newKey] = 'full stack developer';
console.log(person);

//count no of key value pairs

console.log(Object.keys(person).length);

person.programmingLanguages = function(){
    return 'list of languages known'
}

console.log(person.programmingLanguages());