import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRouter from "../src/routes/auth.route";
import userRouter from "../src/routes/user.route";
import urlRouter from "../src/routes/url.route";
import dbConnect from "./config/db";

const app = express();
const PORT = process.env.PORT || 5555;

// app.use(cors());
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// log all routes calling
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`Route call: ${req.method} ${req.originalUrl} ${req.url}`);
  next();
});

dbConnect();

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/url", urlRouter);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
