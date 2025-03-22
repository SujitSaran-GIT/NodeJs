// Creating A Server Traditional Method

import http from 'http'

const server = http.createServer((req,res) => {
    // console.log("Server is created")
    // console.log(req)
    // res.write("<h1>Hello From Node Server</h1>")
    // res.end()
    // res.setHeader("Content-Type","text/html")
    // res.statusCode = 404
    // res.statusMessage = "Bad"
    // res.write("<h1>Hello From Node Server</h1>")

    // Shothand for status (code, message, header)
    res.writeHead(202, "Good", { "content-type":"text/html"})
    res.write("<h1>Hello From Node Server</h1>")

})
server.listen(8080,(()=> console.log("Server is running")))