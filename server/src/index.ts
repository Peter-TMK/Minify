import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRouter from "../src/routes/auth.route";
import userRouter from "../src/routes/user.route";
import dbConnect from "./config/db";

const app = express();
const PORT = process.env.PORT || 5555;

app.use(cors());
app.use(express.json());

// log all routes calling
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`Route call: ${req.method} ${req.originalUrl} ${req.url}`);
  next();
});

app.use("/api/auth", authRouter);
app.use("/api", userRouter);

dbConnect();

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
