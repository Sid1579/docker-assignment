const http = require("http");

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end("Hello, Dockerized Node.js Application!");
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
