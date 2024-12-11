const http = require("http");

// function requestListener(req, res) {
//   console.log(req.url);
//   res.end("Hello World");
// };

// const server = http.createServer(requestListener);

const server = http.createServer((req, res) => {
  //   console.log(req);
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my node.js server</h1></body>");
  res.write("</html>");
  res.end("Hello World");
});

server.listen(3000);
