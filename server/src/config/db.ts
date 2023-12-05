import mongoose from "mongoose";
// import "dotenv/config";
// require("dotenv").config();
// import * as dotenv from "dotenv";
// dotenv.config({ path: ".env" } as dotenv.DotenvConfigOptions);
// mongoose.set({ strictQuery: false });
const DB_URL = "mongodb://localhost:27017/minify";

const dbConnect = async () => {
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
  });
};

export default dbConnect;
