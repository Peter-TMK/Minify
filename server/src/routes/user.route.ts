import express, { Request, Response } from "express";
import { getUser, getUserById } from "../controllers/auth.controller";
import { verifyAccessToken } from "../middlewares/authToken";
const userRouter = express.Router();

// require("dotenv").config();
// const PORT = process.env.PORT;

// get user by Id
userRouter.get("/:userId", getUserById);
userRouter.get("/", getUser);

// update user
// userRouter.put("/:userId", updateUser);

export default userRouter;
