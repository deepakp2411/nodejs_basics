const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.end("Welcom to our home page")
    }
    if(req.url === '/about') {
        res.end("We are about ")
    }
    res.end( `

    <h1>Oops !<h1>
    
    `)
    server.listen(8000)
})
