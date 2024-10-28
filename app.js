const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log(req.route);
  res.status(200).json({ message: "Hello from the server sidee!" });
});

module.exports = app;
