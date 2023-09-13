const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    // console.log('req obj!!');
    // console.log(req);
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My First Backend Server Page</title></head>')
    res.write('<body><h1>Hello from Node!</h1></body>')
    res.write('</html>')

    res.end()
})

server.listen(3000)