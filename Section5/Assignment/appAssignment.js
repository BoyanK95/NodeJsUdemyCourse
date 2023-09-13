const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  res.send("<h1>The Add Users Page</h1>");

  next();
});

app.use("/", (req, res, next) => {
  res.send("<h1>Home Page</h1>");

  next();
});

app.listen(3001);
