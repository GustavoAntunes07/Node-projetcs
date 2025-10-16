import "./src/modules/module.js";
import { connectDB } from "./src/database/connect.js";
import dotenv from "dotenv";
dotenv.config();

connectDB();
