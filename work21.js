const http = require("http");

const server = http.createServer((req, resp) => {

    let number = Math.floor(Math.random() * 100) + 1;

    resp.writeHead(200, {"Content-Type": "text/html"});

    resp.write(`<h1>Random Number: ${number}</h1>`);

    resp.end();
});

server.listen(3000, () => {
    console.log("Server started");
});