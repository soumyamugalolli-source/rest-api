const http = require("http");
const url = require("url");

const server = http.createServer((req, resp) => {

    const query = url.parse(req.url, true).query;

    resp.writeHead(200, { "Content-Type": "text/html" });

    resp.write(`<h1>Hello ${query.name}</h1>`);

    resp.end();
});

server.listen(3000, () => {
    console.log("Server has been started");
});