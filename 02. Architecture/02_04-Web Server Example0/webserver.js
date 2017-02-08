/*
As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications.
In the following "hello world" example, many connections can be handled concurrently.
Upon each connection the callback is fired, but if there is no work to be done Node is sleeping.
*/

const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
