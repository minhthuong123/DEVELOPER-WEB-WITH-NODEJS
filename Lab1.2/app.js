const { createServer } = require("http");
const server = createServer((reqest, response) => {
  console.log(reqest);
});
server.listen(3000);
