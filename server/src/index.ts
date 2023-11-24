import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 5555;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

app.post("/post", (req, res) => {
  const urlPost = req.body;
  res.status(201).send(urlPost);
});

// mongodb://localhost:27017/note_api
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
