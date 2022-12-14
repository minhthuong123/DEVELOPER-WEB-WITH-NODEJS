const { createServer } = require("http");
const routes = require("./routes");
const server = createServer(routes.handler);
server.listen(3000);
