import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
const JWT_TOKEN = process.env.JWT_TOKEN || "urlshortenertoken";

export function verifyAccessToken(req: any, res: any, next: any) {
  const authToken = req.headers.token;
  !authToken && res.status(403).json({ error: "Unauthorized!" });
  if (authToken) {
    const token = authToken.split(" ")[1];
    jwt.verify(token, JWT_TOKEN, (err, user) => {
      if (user) {
        req.user = user;
        next();
      } else if (err) {
        res.status(403).json({ error: "Unauthorized!" });
      }
    });
  }
}
