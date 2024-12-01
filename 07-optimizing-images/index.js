const express = require("express");

const app = express();
const port = process.env.PORT;
app.get("/", (req, res) => {
  res.json({ message: `hello World from ${process.env.APP_NAME}` });
});



app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
