// npm init
//npm install --save axios

var axios = require('axios');

//HTTP Methods - GET, POST, DELETE, PUT

var name = 'lucky';
var key = 'pRPLCejozFwCHFbVCR';

var url = `https://gender-api.com/get?name=${name}&key=${key}`;
axios.get(url).then(function(response){
    console.log(`The Gender of ${response.data.name} is ${response.data.gender}`);
}).catch(function(err){
    console.log(err.code);
});