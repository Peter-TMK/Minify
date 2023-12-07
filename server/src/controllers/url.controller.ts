import express, { Request, Response } from "express";
// import shortid from "shortid";

import URLModel from "../models/url.model";
// import { generateShortURL } from "../services/url.services";

// export const shortenUrl = async (req: Request, res: Response) => {
//   try {
//     const { originalURL, customAlias } = req.body;
//     // const originalURL = req.body.originalURL;
//     // const customAlias = req.body.customAlias;
//     if (customAlias) {
//       const existingUrl = await URLModel.findOne({ customAlias });
//       if (existingUrl) {
//         return res.status(400).json({
//           error: "Custom URL already exists. Please choose another!",
//         });
//       }
//     }

//     // Generating a short URL
//     const shortURL = customAlias ? customAlias : generateShortURL();
//     //   const shortURL = generateShortURL();

//     // Saving URL to database
//     const url = new URLModel({
//       originalURL,
//       shortURL,
//       customAlias,
//     });

//     // Save the URL to the database
//     const savedUrl = await url.save();

//     res.status(201).json(savedUrl);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal server error!" });
//   }
// };

// export const customizeUrl = async (req: Request, res: Response) => {
//   try {
//     const { customAlias, _id } = req.body;

//     // Check if customAlias is provided and validate uniqueness
//     if (!customAlias) {
//       return res.status(400).json({ error: "Custom Alias is required!" });
//     }
//     const existingUrl = await URLModel.findOne({ customAlias });

//     if (existingUrl) {
//       return res.status(400).json({
//         error: "Custom Alias already exists. Please choose another!",
//       });
//     }

//     // Validate custom alias format (e.g., length, allowed characters)
//     const aliasRegex = /^[a-zA-Z0-9_-]+$/;
//     if (!aliasRegex.test(customAlias)) {
//       return res.status(400).json({ error: "Invalid custom alias format." });
//     }

//     // Find the URL by ID
//     const url = await URLModel.findById(_id);

//     if (!url) {
//       return res.status(404).json({ error: "URL not found" });
//     }

//     // Update the URL with the customAlias
//     url.customAlias = shortid.generate();
//     // url.customAlias = `https://short.url/${customAlias}`;
//     await url.save();

//     // console.log("url: ", url);
//     // console.log("urlid: ", URLModel.findById(urlId));
//     res.status(200).json(url);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// // URLModel.findOne({ customAlias });
