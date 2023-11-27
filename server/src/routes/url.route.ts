import express from "express";
import { shortenUrl } from "../controllers/url.controller";

const router = express.Router();

router.post("/shorten", shortenUrl);

export default router;
