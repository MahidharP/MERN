var axios = require('axios');

var url = 'http://dct-api-data.herokuapp.com/tickets';
var key = '90f66164c2fb6511';

// var ticket = {
//     name: 'Mahidhar',
//     department: 'Techincal',
//     priority: 'High',
//     message: 'Net is down. Please Fix'
// };

// axios.post(`${url}?api_key=${key}`, ticket).then((response) => {
//     var ticket = response.data;
//     console.log(ticket);
// }).catch((err) => {
//     console.log(err);
// });



var ticket = {
    name: 'Mahesh',
    department: 'Technical',
    message: 'Net Never Works. Please Fix',
    priority: 'Low'
};

axios.post(`${url}?api_key=${key}`, ticket).then((response) => {
    var error = response.data.errors;
    if (error){
        for (var key in error){
            console.log(`${key}, ${error[key].join(', ')}`);
        }      
    }else {
        console.log(ticket);
    }
}).catch((err) => {
    console.log(err);
});