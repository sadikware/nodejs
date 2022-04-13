const http = require("http");
const fs = require("fs");

const port = 4000;
const hostName = "127.0.0.1";

const server = http.createServer((req, res) => {
  const readFile = (statusCode, fileLocation) => {
    fs.readFile(fileLocation, (err, data) => {
      res.writeHead(statusCode, { "content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  };
  if (req.url == "/") {
    readFile(200, "./html/index.html");
  }

  if(req.url == "/about") {
    
    readFile(200, "./html/about.html");
  }

  if(req.url == "/contact"){
    readFile(200, "./html/contact.html");
  }
});

server.listen(port, hostName, () => {
  console.log(`Server is running at http://${hostName}:${port}`);
});
