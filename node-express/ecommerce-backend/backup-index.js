var express = require('express');

var app = express();

// routers

app.get('/', function(req, res){
    console.log(`${re1.ip} - ${req.method} - ${new Date()}`);
    res.send('<h2>Hello World</h2>');
})

app.listen(3000, function(){
    console.log('Listening to port 3000');
});
