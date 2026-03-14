import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cloudinary from "./config/cloudinary.js";
import upload from "./middleware/upload.js";
import { Readable } from "stream"; // ✅ Use import, not require
import tryOnRoute from "./routes/tryon.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectDB();

// Helper: convert buffer to readable stream
function bufferToStream(buffer) {
  const readable = new Readable();
  readable.push(buffer);
  readable.push(null);
  return readable;
}
app.use("/api/tryon", tryOnRoute);

// Upload route: accepts any number of files
app.post("/upload", upload.any(), async (req, res) => {
  try {
    console.log("req.files:", req.files);

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No files uploaded" });
    }

    const uploadedFiles = await Promise.all(
      req.files.map(
        (file) =>
          new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
              { folder: "virtual_tryon" },
              (error, result) => {
                if (error) reject(error);
                else resolve(result.secure_url);
              }
            );

            bufferToStream(file.buffer).pipe(stream);
          })
      )
    );

    // ✅ Send single image URL to frontend
    res.json({ imageUrl: uploadedFiles[0] });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Upload failed", error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));