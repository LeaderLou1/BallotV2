require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");

const handleCookieSessions = require("./middleware/handleCookieSessions");
const logRoutes = require("./middleware/logRoutes");

const authRouter = require("./routers/authRouter");
const userRouter = require("./routers/userRouter");
const { getAllPosts } = require("./controllers/postControllers");

const app = express();

// CORS configuration
const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? ["https://your-frontend-domain.com"] // Replace with your actual frontend domain
      : ["http://localhost:5173"], // Vite's default port
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(handleCookieSessions); // adds a session property to each request representing the cookie
app.use(logRoutes); // print information about each incoming request
app.use(express.json()); // parse incoming request bodies as JSON
app.use(express.static(path.join(__dirname, "../frontend/dist"))); // Serve static assets from the dist folder of the frontend

app.use("/api", authRouter);
app.use("/api/users", userRouter);

app.get("/api/posts", getAllPosts);
// controller
// model method

// Requests meant for the API will be sent along to the router.
// For all other requests, send back the index.html file in the dist folder.
app.get("*", (req, res, next) => {
  if (req.originalUrl.startsWith("/api")) return next();
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
