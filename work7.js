const http = require("http");

const server = http.createServer((req, resp) => {

    const date = new Date();

    resp.writeHead(200, { "Content-Type": "text/html" });

    resp.write(`<h1>Current Date and Time</h1>`);
    resp.write(`<p>${date}</p>`);

    resp.end();
});

server.listen(3000, () => {
    console.log("Server has been started");
});