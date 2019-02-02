//create a package.json file
//install axios

//make an api request to https://jsonplaceholder.typicode.com/datas

var axios = require('axios');

var url = 'https://jsonplaceholder.typicode.com/users';
axios.get(url).then(function(response){
    response.data.forEach(function(user){
        console.log(`${user.id}. ${user.name} - ${user.email} - ${user.address.street} (${user.address.zipcode}) (${user.address.geo.lat}, ${user.address.geo.lng}) - ${user.phone} - ${user.website} - ${user.company.name}`);
    })
});