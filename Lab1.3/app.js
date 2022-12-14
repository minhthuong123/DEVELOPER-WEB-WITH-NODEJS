const { createServer } = require("http");
const server = createServer((reqest, response) => {
    
  response.setHeader("Content-type", "text/html");
  response.write("<HTML>");
  response.write("<HEAD><title>Hello from my Node.js</title></HEAD>");
  response.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  response.write("</HTML>");
});
server.listen(3000);
