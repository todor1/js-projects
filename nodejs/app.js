const http = require("http");
const routes = require("./routes");
// const server = http.createServer(routes);

console.log(routes.someText);
// routes.handler is the requestHandler function in case of multiple exports
const server = http.createServer(routes.handler);

server.listen(3000);
