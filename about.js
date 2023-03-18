const http = require('http');   //react에서는 import node에서는 require 사용

const hostname = '127.0.0.1';   //노드의 가상 서버 주소
const port = 3000;

const server = http.createServer((req, res) => {    // req : 요청, res : 응답
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});