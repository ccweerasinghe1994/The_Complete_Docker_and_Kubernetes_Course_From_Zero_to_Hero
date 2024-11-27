const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const app = express();
const users = [];
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const newUserId = req.body.id;

  if (!newUserId) {
    return res.status(400).send("User id is required");
  }

  const isUserExists = users.find((user) => user.id === newUserId);
  if (isUserExists) {
    return res.status(400).send("User already exists");
  }

  users.push(req.body);

  return res.status(201).json("User created successfully updated");
});

app.post("/echo", (req, res) => {
  console.log(req.body);
  console.log("this is a test updated");
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
