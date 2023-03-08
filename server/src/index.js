import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_ACCESS_KEY);

app.listen(3001, () => console.log("Server started"));
