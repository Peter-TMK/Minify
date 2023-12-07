import express from "express";
import URLModel from "../models/url.model";
import { UrlPayLoadType } from "../types";
import { generate as generateurlcode } from "generate-password";

const router = express.Router();

// import { shortenUrl, customizeUrl } from "../controllers/url.controller";
// router.post("/shorten", shortenUrl);
// router.post("/customize", customizeUrl);

// create url
export const createUrl = async (payload: UrlPayLoadType) => {
  if (!payload.originalLink) throw Error("Missing parameter");
  try {
    let url = new URLModel(payload);

    // create url code
    const urlCode = generateurlcode({
      length: 8,
      numbers: true,
      uppercase: true,
    });

    url.urlCode = urlCode;
    url = await url.save();
    return url;
  } catch (error) {
    console.error(error);
  }
};
