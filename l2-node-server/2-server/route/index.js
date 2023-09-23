const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);

  if (url === '/') {
    res.write('main page');
  } else if (url === '/users-tmp') {
    res.statusCode = 302;
    res.setHeader('location', '/users');
  } else if (url === '/users') {
    res.write('users page');
  } else if (url === '/todos') {
    res.write('todos page');
  } else {
    res.statusCode = 400;
    res.write('unsnupported');
  }

  res.end();

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});