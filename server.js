const express = require("express");
const path = require("path");

const app = express();
app.use(express.static("client"));

const port = 3000;

app.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
