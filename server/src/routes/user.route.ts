import express, { Request, Response } from "express";
import { getUserById } from "../controllers/auth.controller";
import { verifyAccessToken } from "../middlewares/authToken";
const userRouter = express.Router();

// require("dotenv").config();
// const PORT = process.env.PORT;

// get user by Id
userRouter.get("/:userId", getUserById);

// update user
// userRouter.put("/:userId", updateUser);

export default userRouter;
