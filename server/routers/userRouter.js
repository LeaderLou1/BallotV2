const express = require("express");
const userControllers = require("../controllers/userControllers");
const postControllers = require("../controllers/postControllers");
const checkAuthentication = require("../middleware/checkAuthentication");
const postAuthorization = require("../middleware/postAuthorization");

const userRouter = express.Router();

// user related endpoints
userRouter.post("/", checkAuthentication, userControllers.createUser); // Register
userRouter.patch("/:id", checkAuthentication, userControllers.updateUser); // Update user information
userRouter.get("/", checkAuthentication, userControllers.listUsers); // Show all users
userRouter.get("/:id", checkAuthentication, userControllers.showUser); // Show one user
// userRouter.patch(
//   "/:id/representative",
//   checkAuthentication,
//   userControllers.updateToRepresentative
// ); // Update user to representative

// userRouter.delete("/:id", checkAuthentication, userControllers.deleteUser);

// user post related endpoints
userRouter.post(
  "/:id/posts",
  checkAuthentication,
  postAuthorization,
  postControllers.create
);
// Create a post

userRouter.get("/:id/posts", checkAuthentication, postControllers.findByUserId);
// Get posts by a representative

userRouter.delete(
  "/:id/posts/:postId",
  checkAuthentication,
  postAuthorization,
  postControllers.delete
);
// Delete a post

// user follow related endpoints

// userRouter.post(
//   "/:id/follow",
//   checkAuthentication,
//   userControllers.followRepresentative
// ); // Follow a representative

// userRouter.get(
//   "/:id/followers",
//   checkAuthentication,
//   userControllers.getFollowers
// ); // Get followers
// userRouter.get(
//   "/:id/following",
//   checkAuthentication,
//   userControllers.getFollowing
// ); // Get following

// userRouter.delete(
//   "/:id/follow/:userId",
//   userControllers.unfollowRepresentative
// ); // Unfollow a representative

module.exports = userRouter;
