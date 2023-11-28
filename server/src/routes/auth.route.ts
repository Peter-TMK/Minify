import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// const express = require("express");
import UserModel from "../models/user.model";
const router = express.Router();

// require("dotenv").config();
// const PORT = process.env.PORT;

// User registeration
router.post("/register", async (req: Request, res: Response) => {
  try {
    const { fullName, email, password } = req.body;

    // checking if user already exist
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists!" });
    }

    // hashing the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // creating a new user

    const newUser = new UserModel({
      fullName,
      email,
      password: hashedPassword,
    });

    // saving user details to db
    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });

    // login a user
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error!" });
  }
});

// User login
router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // checking if user exists
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email/password" });
    }

    // compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid email/paswword" });
    }

    // generating JWT token
    const token = jwt.sign(
      {
        email: user.email,
        id: user.id,
      },
      process.env.JWT_SECRET || "helloworld",
      { expiresIn: "1h" }
    );

    res.status(200).json({
      email: user.email,
      token,
      expiresIn: `${3600}s`, // 1 hour
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error!" });
  }
});

export default router;
