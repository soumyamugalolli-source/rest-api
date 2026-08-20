const http = require("http");
const os = require("os");

const server = http.createServer((req, resp) => {

    resp.writeHead(200, {"Content-Type": "text/html"});

    resp.write(`<h1>System Architecture: ${os.arch()}</h1>`);

    resp.end();
});

server.listen(3000, () => {
    console.log("Server started");
});