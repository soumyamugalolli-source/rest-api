const http = require("http");
const os = require("os");

const server = http.createServer((req, resp) => {

    const cpu = os.cpus();

    resp.writeHead(200, {"Content-Type": "text/html"});

    resp.write(`<h1>CPU Model</h1>`);
    resp.write(`<p>${cpu[0].model}</p>`);

    resp.end();
});

server.listen(3000, () => {
    console.log("Server started");
});