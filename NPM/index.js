import http from 'http'

const server = http.createServer((req,res) => {
    res.writeHead(200, "Good", {
        "content-type" : "text/html"
    })
    res.write("<h1>Hello From node js server</h1>")
})

server.listen(8000,() => console.log(`Server is running on 8000`))