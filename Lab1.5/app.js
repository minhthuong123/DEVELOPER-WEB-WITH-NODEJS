const { createServer } = require("http");
const fs = require("fs");
const server = createServer((request, response) => {
  const url = request.url;
  const method = request.method
  if (url === "/") {
    response.write("<HTML>");
    response.write("<HEAD><title>Enter Message</title></HEAD>");
    response.write(
      '<body><form action ="/message" method = "POST"><input type = "text" name = "message" ><button type = "submit">Send</button></form></body>'
    );
    response.write("</HTML>");
    return response.end();
  }
  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.text", "DUMMY");
    response.statusCode = 302;
    response.setHeader("Location", "/");
    return response.end();
  }
  response.setHeader("Content-type", "text/html");
  response.write("<HTML>");
  response.write("<HEAD><title>Hello from my Node.js</title></HEAD>");
  response.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  response.write("</HTML>");
  response.end();
});
server.listen(3000);
