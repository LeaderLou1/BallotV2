const { isAuthorized } = require("../utils/auth-utils");

const Follower = require("../db/models/Follower");

exports.followRepresentative = async (req, res) => {
  const { followed_user_id } = req.body;
  const { follower_user_id } = req.params;

  const result = await Follower.followUser(
    follower_user_id,
    followed_user_id,
    username
  );
  if (result) {
    const followedUser = await Follower.followUser(followed_user_id);
    res
      .status(201)
      .json({ message: `You are now following ${followedUser.username}` });
  } else {
    res.status(400).json({ error: `You already follow this user` });
  }
};

exports.unfollowUser = async (req, res) => {
  const { user_id, followed_user_id } = req.body;

  const result = await Follower.unfollowUser(user_id, followed_user_id);
  if (result) {
    const followedUser = await User.findbyId(followed_user_id);
    res
      .status(200)
      .json({ message: `You just unfollowed ${followedUser.username}` });
  } else {
    res.status(400).json({ error: "You were not following this user" });
  }
};

exports.getFollowers = async (req, res) => {
  const { user_id } = req.params;

  const followers = await Follower.getFollowers(user_id);
  res.status(200).json(followers);
};
