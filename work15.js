const http = require("http");

const server = http.createServer((req, resp) => {

    resp.writeHead(200, {"Content-Type": "text/html"});

    resp.write(`<h1>Requested URL: ${req.url}</h1>`);

    resp.end();
});

server.listen(3000, () => {
    console.log("Server started");
});