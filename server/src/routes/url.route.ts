import express, { NextFunction, Request, Response } from "express";
import URLModel from "../models/url.model";
import { createUrl, getUrl, getUrlCode } from "../controllers/url.controller";
// import { getUrlByUrlCode } from "../services/url.services";

const urlRouter = express.Router();

urlRouter.post("/", createUrl);
urlRouter.get("/", getUrl);
urlRouter.get("/:urlCode", getUrlCode);

export default urlRouter;
