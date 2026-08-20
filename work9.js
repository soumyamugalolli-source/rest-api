const fs = require("fs");
const http = require("http");

const server = http.createServer((req, resp) => {

    fs.readFile("data.txt", "utf8", (err, data) => {

        resp.writeHead(200, { "Content-Type": "text/html" });

        if (err) {
            resp.write("<h1>File not found</h1>");
        }
        else {
            resp.write(`<h1>File Content</h1>`);
            resp.write(`<p>${data}</p>`);
        }

        resp.end();
    });
});

server.listen(3000, () => {
    console.log("Server has been started");
});