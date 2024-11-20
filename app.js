import express from "express";
import "dotenv/config";
import { router as userRoter } from "./data/routes.js";

let port = 3000;
const app = express();
import cors from "cors";

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Your frontend URL
    allowedHeaders: ["Authorization", "Content-Type"], // Allow the Authorization header
  })
);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.use(userRoter);
