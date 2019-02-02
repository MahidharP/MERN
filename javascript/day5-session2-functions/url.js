var axios = require('axios');
const { console } = require("./delete-ticket");
var url = 'http://dct-api-data.herokuapp.com/tickets';
var key = '90f66164c2fb6511';
var code = 'DCT-1250';
axios.delete(`${url}/${code}?api_key=${key}`).then((response) => {
    console.log(response.data);
}).catch((err) => {
    console.log(err);
});