const http = require("http");

const server = http.createServer((req, resp) => {

    let number = 15;

    resp.writeHead(200, { "Content-Type": "text/html" });

    if (number % 2 == 0) {
        resp.write(`<h1>${number} is Even</h1>`);
    }
    else {
        resp.write(`<h1>${number} is Odd</h1>`);
    }

    resp.end();
});

server.listen(3000, () => {
    console.log("Server has been started");
});