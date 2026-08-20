const http = require("http");
const os = require("os");

const server = http.createServer((req, resp) => {

    const memory = os.freemem();

    resp.writeHead(200, {"Content-Type": "text/html"});

    resp.write(`<h1>Free Memory</h1>`);
    resp.write(`<p>${memory} bytes</p>`);

    resp.end();
});

server.listen(3000, () => {
    console.log("Server started");
});