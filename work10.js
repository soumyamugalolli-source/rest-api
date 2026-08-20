require("dotenv").config();

const http = require("http");

const server = http.createServer((req, resp) => {

    resp.writeHead(200, { "Content-Type": "text/html" });

    resp.write(`<h1>${process.env.SERVER} has been started</h1>`);

    resp.end();
});

server.listen(process.env.PORT, () => {
    console.log("Server has been started");
});