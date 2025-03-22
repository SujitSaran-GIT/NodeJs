import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile("./public/home.html", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
            } else {
                res.end(data);
            }
        });
    } else if (req.url === '/about') {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile("./public/about.html", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
            } else {
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, "Bad", { "Content-Type": "text/html" });
        res.end("<h1>404 Page not found</h1>");
    }
});

server.listen(8000, () => console.log("Server Running on Port 8000"));
