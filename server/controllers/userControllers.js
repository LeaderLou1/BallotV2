const { isAuthorized } = require("../utils/auth-utils");
const User = require("../db/models/User");

exports.createUser = async (req, res) => {
  const {
    username,
    password,
    first_name,
    last_name,
    picture_url,
    zipcode,
    state,
    location,
    bio,
    is_rep,
  } = req.body;

  // TODO: check if username is taken, and if it is what should you return?
  const user = await User.create(
    username,
    password,
    first_name,
    last_name,
    picture_url,
    zipcode,
    state,
    location,
    bio,
    is_rep
  );
  req.session.userId = user.id;

  res.send(user);
};

exports.listUsers = async (req, res) => {
  const users = await User.list();
  res.send(users);
};

exports.showUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.find(id);
  if (!user) return res.sendStatus(404);

  res.send(user);
};

exports.updateUser = async (req, res) => {
  const { username } = req.body;
  const { is_rep } = req.body;
  const { first_name } = req.body;
  const { last_name } = req.body;
  const { picture_url } = req.body;
  const { zipcode } = req.body;
  const { state } = req.body;
  const { bio } = req.body;
  const { location } = req.body;
  const { id } = req.params;

  // Not only do users need to be logged in to update a user, they
  // need to be authorized to perform this action for this particular
  // user (users should only be able to change their own profiles)
  if (!isAuthorized(id, req.session)) return res.sendStatus(403);

  const updatedUser = await User.update(
    id,
    username,
    is_rep,
    first_name,
    last_name,
    picture_url,
    zipcode,
    state,
    bio,
    location
  );
  if (!updatedUser) return res.sendStatus(404);
  res.send(updatedUser);
};
