const http = require('http');

const myServer = http.createServer((req, res)=>{
    res.end('Server Activated')
});

myServer.listen(4000, ()=> {
    console.log('Server is listening on Port 4000');
})