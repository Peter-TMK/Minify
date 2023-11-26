import express, { Request, Response } from "express";
import mongoose from "mongoose";
import URLModel from "../src/models/url.model";
// import { url } from "inspector";
import { nanoid } from "nanoid";
// const { nanoid } = require("nanoid");
// import { seedrandom, customRandom } from "nanoid";

const app = express();
const PORT = process.env.PORT || 5555;
app.use(express.json());

app.get("/a", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World" });
});

// app.post("/post", (req, res) => {
//   const urlPost = req.body;
//   res.status(201).send(urlPost);
// });

app.post("/shorten", async (req: Request, res: Response) => {
  try {
    const { originalURL } = req.body;
    // const { originalURL, customAlias } = req.body;
    // const customAlias = req.body.customAlias;
    // if (customAlias) {
    //   const existingUrl = await URLModel.findOne({ customAlias });
    //   if (existingUrl) {
    //     return res
    //       .status(400)
    //       .json({ error: "Custom URL already exists. Please choose another!" });
    //   }
    // }

    // Generating a short URL
    // const shortURL = customAlias ? customAlias : generateShortURL();
    const shortURL = generateShortURL();

    // Saving URL to database
    const url = new URLModel({
      originalURL,
      shortURL,
      //   customAlias,
    });
    await url.save();

    res.status(201).json(url);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error!" });
  }
});

//////////////////////////////////////////////////////////////
// const rng = seedrandom(8);
// const nanoid = customRandom("abcdef", 10, (size) => {
//   return new Uint8Array(size).map(() => 256 * rng());
// });

// nanoid(); //=> "fbaefaadeb"
/////////////////////////////////////////////////////////////

const generateShortURL = (): string => {
  // import('nanoid').then(({ nanoid }) => {
  const shortURL = nanoid(8);
  console.log(shortURL);
  return `https:short.url/${shortURL}`;
};

// mongodb://localhost:27017/minify
const DB_URL = "mongodb://localhost:27017/minify";
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Add the following line to resolve the TypeScript error
  // Use `useCreateIndex` instead of `useNewUrlParser`
  //   useCreateIndex: true,
} as mongoose.ConnectOptions);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", () => {
  console.log("MongoDB connected successfully!");
  app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
  });
});
