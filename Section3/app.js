const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    console.log('req obj!!');
    console.log(req);
})

server.listen(3000)