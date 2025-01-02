const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write(
      '<body><form action="/message" method="post"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      // node js will execute this function whenever a new chunk is ready to be read
      // until all the chunks are read
      // console.log("Chunk:", chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      // registering a func to be called in future when the request is done
      // this will be executed once all the chunks are read
      // node does not wait & pause, it will not block the script execution,
      // it just registers the function as a tobe executed action in future
      const parsedBody = Buffer.concat(body).toString();
      // console.log("Parsed Body:", parsedBody);
      const message = parsedBody.split("=")[1];
      // console.log("Message:", message);
      fs.writeFileSync("message.txt", message);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my node.js server</h1></body>");
  res.write("</html>");
  res.end("Hello World");
});

server.listen(3000);
