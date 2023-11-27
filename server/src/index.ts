import express from "express";
import mongoose from "mongoose";
import router from "./routes/url.route";

const app = express();
const PORT = process.env.PORT || 5555;
app.use(express.json());

app.use("/api/url", router);

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
