const routesHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Hello Exam</title></head>");
    res.write(
      '<body><h1>Hello there!</h1><h3>Please enter a user</h3><form action="/create-user" method="POST"><input type="text" name="create-user"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const username = parsedBody.split("=")[1];
      console.log(username);
    });

    res.statusCode = 302;
    res.setHeader("Location", '/');
    res.end()
  }

  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Hello Exam</title></head>");
    res.write(
      "<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  }
};

module.exports = routesHandler;
