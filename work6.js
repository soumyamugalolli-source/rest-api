const http = require("http");

const server = http.createServer((req, resp) => {
    resp.writeHead(200, { "Content-Type": "text/html" });

    resp.write("<h1>Hello from NodeJS Server</h1>");
    resp.write("<p>Welcome to Internet Technology</p>");

    resp.end();
});

server.listen(3000, () => {
    console.log("Server has been started");
});