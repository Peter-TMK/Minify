import express, { Request, Response } from "express";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// const express = require("express");
// import UserModel from "../models/user.model";
import { loginUser, registerUser } from "../controllers/auth.controller";
const router = express.Router();

// require("dotenv").config();
// const PORT = process.env.PORT;

// User registeration
router.post("/register", registerUser);

// User login
router.post("/login", loginUser);

export default router;
