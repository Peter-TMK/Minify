import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRouter from "../src/routes/auth.route";
import userRouter from "../src/routes/user.route";
import dbConnect from "./config/db";

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api", userRouter);

dbConnect();

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
