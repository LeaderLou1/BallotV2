const express = require("express");
const userControllers = require("../controllers/userControllers");
const checkAuthentication = require("../middleware/checkAuthentication");

const userRouter = express.Router();

userRouter.post("/", checkAuthentication, userControllers.createUser); // Register
userRouter.post("/:id/posts", checkAuthentication, userControllers.createPost); // Create a post
userRouter.post(
  "/:id/follow",
  checkAuthentication,
  userControllers.followRepresentative
); // Follow a representative

userRouter.patch("/:id", checkAuthentication, userControllers.updateUser); // Update user information
userRouter.patch(
  "/:id/representative",
  checkAuthentication,
  userControllers.updateToRepresentative
); // Update user to representative

userRouter.get("/", checkAuthentication, userControllers.listUsers); // Show all users
userRouter.get("/:id", checkAuthentication, userControllers.showUser); // Show one user
userRouter.get(
  "/:id/posts",
  checkAuthentication,
  userControllers.getPostsByRepresentative
); // Get posts by a representative
userRouter.get(
  "/:id/followers",
  checkAuthentication,
  userControllers.getFollowers
); // Get followers
userRouter.get(
  "/:id/following",
  checkAuthentication,
  userControllers.getFollowing
); // Get following

userRouter.delete(
  "/:id/follow/:userId",
  userControllers.unfollowRepresentative
); // Unfollow a representative
userRouter.delete(
  "/:id/posts/:postId",
  checkAuthentication,
  userControllers.deletePost
); // Delete a post
userRouter.delete("/:id", checkAuthentication, userControllers.deleteUser);
module.exports = userRouter;
