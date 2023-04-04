const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("TESTING SERVER");
});

app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];
  res.json(users);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "password") {
    res.send("Login successful");
  } else {
    res.status(401).send("Incorrect username or password");
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
