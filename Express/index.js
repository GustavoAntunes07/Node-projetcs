import "./src/modules/module.js";
import { connectDB } from "./src/database/connect.js";
import express from "express";
import UserModel from "./src/database/models/user.models.js";
import dotenv from "dotenv";
dotenv.config();

connectDB();

const app = express();
app.use(express.json());

// Method GET to fetch all users
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({}); // {} = filter
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.get("/users/:id", async (req, res) => {});

// Method POST to create a new user
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
    console.log("ALOU");
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
});

app.listen(7000, () => {
  console.log("Server running on http://localhost:7000");
});
