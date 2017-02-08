/*
As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications.
In the following "hello world" example, many connections can be handled concurrently.
Upon each connection the callback is fired, but if there is no work to be done Node is sleeping.
-----------------------
No raise condition of changing same value twice, because of single threding
userCounter can be scaled globally with no issue, no special locking needed
(like changing userCounter with 2 simultinous connections)
*/

const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

var userCounter = 0;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  userCounter++;
  res.end('Hello World, you are user: \n' + userCounter);
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
