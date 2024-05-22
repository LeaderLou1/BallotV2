const Follower = require("../db/models/Follower");
const User = require("../db/models/User");

exports.followRepresentative = async (req, res) => {
  const { followed_user_id } = req.body;
  const { follower_user_id } = req.params;

  const result = await Follower.followUser(follower_user_id, followed_user_id);
  if (result) {
    const followedUser = await User.find(followed_user_id);
    res.status(201).json({ message: `You are now following ${followedUser.username}` });
  } else {
    res.status(400).json({ error: `You already follow this user` });
  }
};

exports.unfollowUser = async (req, res) => {
  const { follower_user_id } = req.params;
  const { followed_user_id } = req.query; // Use query parameters for DELETE

  const result = await Follower.unfollowUser(follower_user_id, followed_user_id);
  if (result) {
    const followedUser = await User.find(followed_user_id);
    res.status(200).json({ message: `You just unfollowed ${followedUser.username}` });
  } else {
    res.status(400).json({ error: "You were not following this user" });
  }
};

exports.getFollowers = async (req, res) => {
  const { followed_user_id } = req.params;

  const followers = await Follower.getFollowers(followed_user_id);
  res.status(200).json(followers);
};

exports.getFollowed = async (req, res) => {
  const { follower_user_id } = req.params;

  const followed = await Follower.getFollowed(follower_user_id);
  res.status(200).json(followed);
};
