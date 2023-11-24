import express from "express";

const app = express();
const PORT = process.env.PORT || 5555;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
