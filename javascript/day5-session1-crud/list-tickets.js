var axios = require('axios');

var url = 'http://dct-api-data.herokuapp.com/tickets';
var key = '90f66164c2fb6511';

// http://http://dct-api-data.herokuapp.com/tickets?api_key=90f66164c2fb6511

//url - uniform resource locator
// protocol - http / https
// domain (base url) = dct-api-data.herokuapp.com
// sub domain - dct-api-data
// tld (Top Level Domain) - com
// uri (uniform resource managar) - /tickets
// parameter - api_key = 90f66164c2fb6511
//parameters are seperated with &

axios.get(`${url}?api_key=${key}`).then((response) =>{
    var tickets = response.data;
    if (tickets.length == 0){
        console.log('No Tickets are found');
    } else {
        console.log("*".repeat(25));
        console.log('Listing Tickets - ' + tickets.length);
        console.log("*".repeat(25));
        tickets.forEach(function(ticket){
            console.log(ticket);
        });
    }
}).catch((err) =>{
    console.log(err);
});