const http = require('http');
const fs = require('fs');
const filecontent = fs.readFileSync('index.html');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type':'text/html'});;
    res.end(filecontent);
  
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });