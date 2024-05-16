const express = require("express");
const postsControllers = ("../controllers/postControllers")

const postRouter = express.Router();

postRouter.get("/api/users/:id/posts", postsControllers.findByUserId)
// postRouter.post("/")