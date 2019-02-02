var value = {
    errors: {
        email: ['invalid format'],
        password: ['can\'t be blank', 'minimum length 8']
    }
};
var count = 0;
Object.values(value.errors).forEach(function(error){
    count += error.length;
})
console.log('Total errors in Field', count);
