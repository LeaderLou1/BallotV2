const express = require("express");
const followerControllers = require("../controllers/followerControllers");
const userControllers = require("../controllers/userControllers");
const postControllers = require("../controllers/postControllers");
const checkAuthentication = require("../middleware/checkAuthentication");
const postAuthorization = require("../middleware/postAuthorization");
const userRouter = express.Router();

// user related endpoints
userRouter.post("/", /*checkAuthentication,*/ userControllers.createUser); // Register

// Update user information
userRouter.patch("/:id", checkAuthentication, userControllers.updateUser);

// Update user bio
userRouter.patch("/:id/bio", checkAuthentication, userControllers.updateUserBio); // New route for updating bio

userRouter.get("/", /*checkAuthentication,*/ userControllers.listUsers); // Show all users
userRouter.get("/:id", /*checkAuthentication,*/ userControllers.showUser); // Show one user

// user post related endpoints
userRouter.post(
  "/:user_id/posts",
  /*checkAuthentication,*/
  // postAuthorization,
  postControllers.create
);
// Create a post

// GET /api/users/:user_id/posts - get posts made by user
userRouter.get(
  "/:user_id/posts",
  /*checkAuthentication,*/ postControllers.findByUserId
);
// Get posts by a user

// PATCH /api/users/:user_id/posts/:post_id - update a post
userRouter.patch(
  "/:user_id/posts/:post_id",
  /*checkAuthentication,*/
  postAuthorization,
  postControllers.update
);
// Update a post

userRouter.delete(
  "/:user_id/posts/:post_id",
  /*checkAuthentication,*/
  postAuthorization,
  postControllers.delete
);
// Delete a post

// user follow related endpoints

userRouter.post(
  "/:follower_user_id/followed_user_id",
  // checkAuthentication,
  followerControllers.followRepresentative
); // Follow a representative

userRouter.get(
  "/:follower_user_id/followers",
  checkAuthentication,
  followerControllers.getFollowers
); // Get followers people who follow you

userRouter.get(
  "/:followed_user_id/followed",
  checkAuthentication,
  followerControllers.getFollowed
); // Get followed people who you follow

//Get all posts

userRouter.delete(
  "/:followed_user_id/unfollowUser",
  followerControllers.unfollowUser
); // Unfollow a representative

module.exports = userRouter;
