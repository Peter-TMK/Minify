import express, { Request, Response } from "express";

import URLModel from "../models/url.model";
import { generateShortURL } from "../services/url.services";

export const shortenUrl = async (req: Request, res: Response) => {
  try {
    // const { originalURL, customAlias } = req.body;
    const originalURL = req.body.originalURL;
    const customAlias = req.body.customAlias;
    if (customAlias) {
      const existingUrl = await URLModel.findOne({ customAlias });
      if (existingUrl) {
        return res.status(400).json({
          error: "Custom URL already exists. Please choose another!",
        });
      }
    }

    // Generating a short URL
    const shortURL = customAlias ? customAlias : generateShortURL();
    //   const shortURL = generateShortURL();

    // Saving URL to database
    const url = new URLModel({
      originalURL,
      shortURL,
      customAlias,
    });
    await url.save();

    res.status(201).json(url);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error!" });
  }
};
