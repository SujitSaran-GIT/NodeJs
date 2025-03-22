import http from 'http'

const server = http.createServer((req, res) => {
    console.log(req.url)

    
        req.url === '/' ? res.end("<h1>Home</h1>") : req.url === '/about' ? res.end("<h1>About</h1>") : res.end("<h1>404 Page Not Found</h1>")
    

})

server.listen(8000, () => console.log("Server Up"))