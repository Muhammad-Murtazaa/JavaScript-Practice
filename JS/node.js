console.log("Hello Node");
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const fs=require("fs");
let text=fs.readFileSync("del.txt","utf-8");
text.replace("Muhammad","Front-end Developer");
console.log("I am ");
console.log(text);
fs.writeFileSync("murtaza.txt",text);