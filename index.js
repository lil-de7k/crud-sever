import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import route from "./routes/userRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI;

// ===== Middlewares =====
app.use(cors());                // لحل مشاكل CORS
app.use(express.json());        // عشان يقدر يقرا JSON في الـ body

// ===== Routes =====
app.use("/api", route);         // راوتات المستخدمين كلها تحت /api

// ===== Connect to DB & Start Server =====
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ MongoDB Connected!");
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error("❌ DB connection error:", err.message);
});