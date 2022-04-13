const http = require('http');

const myServer = http.createServer((req, res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.write("<h1>Hello Server</h1>")
    res.end();
});

myServer.listen(4000, ()=> {
    console.log('Server is listening on Port 4000');
})