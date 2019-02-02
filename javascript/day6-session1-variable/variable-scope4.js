var numbers = [10, 20];

// pass by reference
function addToNum(numbers){
    console.log('inside function before pushing', numbers);
    numbers.push(30, 40);
    console.log('inside function after pushing', numbers);
}

console.log('before function', numbers);
addToNum(numbers);
console.log('after function', numbers);

var person = {
    firstName: 'Mahi'
};

function changeFirstName(person){
    console.log('Inside function before update', person);
    person.firstName = 'Mahesh';
    console.log('Inside function after update', person);
}

console.log('before function', person);
changeFirstName(person);
console.log('after function', person);