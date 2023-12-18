import express, { Request, Response } from "express";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// const express = require("express");
// import UserModel from "../models/user.model";
import { loginUser, registerUser } from "../controllers/auth.controller";
// import { getAuthToken } from "../middlewares/auth.token";
const authRouter = express.Router();

// require("dotenv").config();
// const PORT = process.env.PORT;

// User registeration
authRouter.post("/signup", registerUser);

// User login
authRouter.post("/login", loginUser);

export default authRouter;
