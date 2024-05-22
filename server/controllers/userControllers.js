const { isAuthorized } = require("../utils/auth-utils");
const User = require("../db/models/User");

exports.createUser = async (req, res) => {
  const {
    username,
    password,
    first_name,
    last_name,
    zipcode,
    state,
    is_rep
  } = req.body;

  // TODO: check if username is taken, and if it is what should you return?
  const user = await User.create(
    username,
    password,
    is_rep,
    first_name,
    last_name,
    zipcode,
    state
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
  const {
    username,
    is_rep,
    first_name,
    last_name,
    picture_url,
    zipcode,
    state,
    bio,
    location,
  } = req.body;

  // PATCH /api/users/5
  // PATCH /api/users/:id
  // this is the id of the user we want to change
  const { id } = req.params;

  // Not only do users need to be logged in to update a user, they
  // need to be authorized to perform this action for this particular
  // user (users should only be able to change their own profiles)
  if (!isAuthorized(id, req.session)) return res.sendStatus(403);

  const updatedUser = await User.update(
    id,
    username,
    first_name,
    last_name,
    picture_url,
    zipcode,
    state,
    location,
    bio
  );
  if (!updatedUser) return res.sendStatus(404);
  res.send(updatedUser);
};

exports.updateUserBio = async (req, res) => {
  const { id } = req.params;
  const { bio } = req.body;

  // Ensure user is authorized to update their own profile
  if (!isAuthorized(id, req.session)) return res.sendStatus(403);

  const updatedUser = await User.updateBio(id, bio);
  if (!updatedUser) return res.sendStatus(404);
  res.send(updatedUser);
};
