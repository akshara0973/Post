const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Post = require("./models/Post");
require("dotenv").config(); // To use environment variables

const app = express();
// const PORT = 5000;
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;

// Middlewares
app.use(cors());
app.use(express.json());

app.use(cors({
  origin: ["http://localhost:3000", "https://your-frontend.vercel.app"]
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/createpost", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

// POST: Create a new post
app.post("/posts", async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: "Failed to save post" });
  }
});

// GET: Get the last 4 posts by user
app.get("/posts", async (req, res) => {
  const { user } = req.query;

  if (!user) {
    return res.status(400).json({ error: "User query parameter is required" });
  }

  try {
    const posts = await Post.find({ username: user })
      .sort({ timestamp: -1 }) // Sort by newest first
      .limit(4); // Get only the latest 4 posts
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
