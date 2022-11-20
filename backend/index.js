const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.send("I'm a whale!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
