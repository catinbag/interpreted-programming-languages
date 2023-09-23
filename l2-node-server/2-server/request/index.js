const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log("url", req.url);
    console.log("method", req.method);
    console.log("user-agent", req.headers["user-agent"]);
    console.log('headers keys', Object.keys(req.headers))

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});