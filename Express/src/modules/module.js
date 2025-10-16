// importing express module
import express from "express";

// creating an express application
const App = express();

// defining a route
App.get("/", (req, res) => {
  res.send("Hello World");
});

// defining another route for users
App.get("/users", (req, res) => {
  const users = [
    {
      name: "Gustavo",
      email: "example@email.com",
    },
    {
      name: "Maria",
      email: "example2@email.com",
    },
  ];
  res.json(users);
});

// starting the server
App.listen(3000, () => {
  console.log("Server is running on port 3000");
});
