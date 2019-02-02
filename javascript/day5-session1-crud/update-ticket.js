var axios = require('axios');

var url = 'http://dct-api-data.herokuapp.com/tickets';
var key = '90f66164c2fb6511';

var code = 'DCT-b2a4';

var updateTicket = {
    name: 'Sharat'
}

axios.patch(`${url}/${code}?api_key=${key}`, updateTicket).then((response) => {
    var ticket = response.data;
    if(ticket.errors){
        console.log(ticket.errors);
    } 
    else 
    {
        console.log(ticket);
    }
}).catch((err) => {
    console.log(err);
});