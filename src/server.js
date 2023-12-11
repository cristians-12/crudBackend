import express from "express";
import cors from "cors";
import { connectDB } from "./db.js";
import { config } from "dotenv";
import addRoutes from "./routes/addRoute.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://crud12.vercel.app"],
    credentials: true,
  })
);
app.use(express.json());
config();
connectDB();

app.use("/app", addRoutes);
app.listen(3000);
console.log("Servidor en puerto", 3000);
