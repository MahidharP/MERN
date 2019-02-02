const http = require('http');

const port = 3000;

//index, about, services, products, contact'

function requestHandler(request, response){
    console.log('incoming request', request.url);
    if(request.url == '/'){
        response.setHeader('Content-Type', 'text/html')
        response.end('<h2>Home page</h2>')
    } else if(request.url == '/about'){
        response.setHeader('Content-Type', 'text/plain')
        response.end('about us page')
    } else if(request.url == '/products'){
        const products = [
            {id: 1, name: 'marker'},
            {id: 2, name: 'scale'}
        ];
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify(products));
    }else {
        response.end('Page Not Found');
    }
}

const server = http.createServer(requestHandler);
server.listen(port, function(){
    console.log('listening on port', 3000)
});