// npm init -y 
//npm install --save express

const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

const { routes } = require('./config/routes');
const { mongoose } = require('./config/db');

app.use('/', routes);
































// //route handler
// //app.METHOD(PATH, FUNCTION)

// //GET localhost:3000/

// app.get('/', function(request, response){
//     console.log('incoming request', request.url);
//     response.send('<h2>Hello World</h2>');
// });

// //localhost:3000/products

// app.get('/products', (req, res) => {
//     console.log('incoming request', req.url);
//     res.send([{name: 'marker', price: 15}, {name: 'scale', price: 20}]);
// });

app.listen(port, function(){
    console.log('listening on port', port);
})