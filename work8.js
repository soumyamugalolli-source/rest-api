const http = require("http");

const server = http.createServer((req, resp) => {

    resp.writeHead(200, { "Content-Type": "text/html" });

    if (req.url == "/") {
        resp.write("<h1>Home Page</h1>");
    }
    else if (req.url == "/about") {
        resp.write("<h1>About Page</h1>");
    }
    else if (req.url == "/contact") {
        resp.write("<h1>Contact Page</h1>");
    }
    else {
        resp.write("<h1>404 - Page Not Found</h1>");
    }

    resp.end();
});

server.listen(3000, () => {
    console.log("Server has been started");
});