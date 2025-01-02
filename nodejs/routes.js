const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method; // GET or POST

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
      // until all the chunks are read, this function will be called multiple times
      console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      // registering a func to be called in future when the request is done
      // this will be executed once all the chunks are read
      // node does not wait & pause, it will not block the script execution,
      // it just registers the function as a tobe executed action in future
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      // Sync fynction is blocking the execution of the next lines of code
      // fs.writeFileSync("message.txt", message);

      // Async function leads to non-blocking execution
      // callback: action that should be executed once the async action is done
      // the callback here receives an error object, if there is an error
      fs.writeFile("message.txt", message, (err) => {
        // if we've done working with the file, and no error occured
        // we can redirect the user to another page
        // error handling omitted for simplicity
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my node.js server</h1></body>");
  res.write("</html>");
  //   res.end("Hello World");
  res.end();
};

// global object module is available in all files in node.js
// module.exports = requestHandler;
// current export however is local to this file
// module.exports = {
//   handler: requestHandler,
//   someText: "Some hard coded text",
// };
// module.exports.handler = requestHandler;
// module.exports.someText = "Some hard coded text";
exports.handler = requestHandler;
exports.someText = "Some hard coded text";
