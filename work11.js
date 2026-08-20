const http = require("http");

const server = http.createServer((req, resp) => {

    let a = 10;
    let b = 20;
    let sum = a + b;

    resp.writeHead(200, { "Content-Type": "text/html" });

    resp.write(`<h1>First Number: ${a}</h1>`);
    resp.write(`<h1>Second Number: ${b}</h1>`);
    resp.write(`<h1>Sum: ${sum}</h1>`);

    resp.end();
});

server.listen(3000, () => {
    console.log("Server has been started");
});