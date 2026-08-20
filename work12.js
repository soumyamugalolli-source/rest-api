const http = require("http");

const student = {
    name: "Rahul",
    age: 20,
    course: "BCA"
};

const server = http.createServer((req, resp) => {

    resp.writeHead(200, { "Content-Type": "application/json" });

    resp.write(JSON.stringify(student));

    resp.end();
});

server.listen(3000, () => {
    console.log("Server has been started");
});