const http = require("http");
const fs = require('fs')

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);
  // console.log('req obj!!');
  // console.log(req);

  const url = req.url;
  const method = req.method

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end()
  }

  if (url === '/message' && method === 'POST') {
    const body = []
    req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk)
    })

    req.on('end', ()=> {
        const parseBody = Buffer.concat(body).toString()
        console.log(parseBody);
    })

    fs.writeFileSync('message.txt', "DummyData")
    res.statusCode = 302
    res.setHeader('Location', '/')
    return res.end()
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Backend Server Page</title></head>");
  res.write("<body><h1>Hello from Node!</h1></body>");
  res.write("</html>");

  res.end();
});

server.listen(3000);
