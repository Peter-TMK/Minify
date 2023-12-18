import express, { NextFunction, Request, Response } from "express";
import UserModel from "../models/user.model";
// import shortid from "shortid";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
      fullname: user.fullName,
      isLoggedIn: true,
      token,
      expiresIn: `${3600}s`, // 1 hour
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error!" });
  }
};

// get user

export const getUser = async (req: Request, res: Response) => {
  const userInfo = await UserModel.find();
  res.json(userInfo);
};

// get user by Id
export const getUserById = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const userInfo = await UserModel.findById(userId);

  return res.json(userInfo);
};

// update user
// export const updateUser = async (req: Request, res: Response) => {
//   const userId = req.params.userId;
//   const { fullName, email } = req.body;

//   const newName = fullName;
//   const newEmail = email;

//   const userInfo = await UserModel.findById(userId);

//   userInfo.fullName = newName;
//   userInfo.email = newEmail;
//   const userUpdate = await userInfo.save();
// };
