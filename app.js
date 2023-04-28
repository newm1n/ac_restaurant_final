const express = require("express");
const app = express(); // 執行 Express
const port = 3000;

app.get("/", (req, res) => {
  res.send("Homepage.");
});

app.listen(port, () => {
  console.log(`App is listening on localhost:${port}`);
});
