const knex = require("../knex");
const authUtils = require("../../utils/auth-utils");

class User {
  #passwordHash = null; // a private property

  // This constructor is NOT how a controller creates a new user in the database.
  // Instead, it is used by each of the User static methods to hide the hashed
  // password of users before sending user data to the client. Since #passwordHash
  // is private, only the isValidPassword instance method can access that value.
  constructor({
    id,
    username,
    password_hash,
    is_rep,
    first_name,
    last_name,
    picture_url,
    zipcode,
    state,
    location,
    bio,
  }) {
    this.id = id;
    this.username = username;
    this.#passwordHash = password_hash;
    this.isRep = is_rep;
    this.first_name = first_name;
    this.last_name = last_name;
    this.picture_url = picture_url;
    this.zipcode = zipcode;
    this.state = state;
    this.location = location;
    this.bio = bio;
  }

  // This instance method takes in a plain-text password and returns true if it matches
  // the User instance's hashed password.
  isValidPassword = async (password) =>
    authUtils.isValidPassword(password, this.#passwordHash);

  static async list() {
    const query = `SELECT * FROM users`;
    const { rows } = await knex.raw(query);
    // use the constructor to hide each user's passwordHash
    return rows.map((user) => new User(user));
  }

  static async find(id) {
    const query = `SELECT * FROM users WHERE id = ?`;
    const { rows } = await knex.raw(query, [id]);
    const user = rows[0];
    return user ? new User(user) : null;
  }

  static async findByUsername(username) {
    const query = `SELECT * FROM users WHERE username = ?`;
    const { rows } = await knex.raw(query, [username]);
    const user = rows[0];
    return user ? new User(user) : null;
  }

  static async create(
    username,
    password,
    is_rep,
    first_name,
    last_name,
    picture_url,
    zipcode,
    state,
    location,
    bio
  ) {
    // modify to determine user is represenentstive
    // hash the plain-text password using bcrypt before storing it in the database
    const passwordHash = await authUtils.hashPassword(password);

    const query = `INSERT INTO users (
      username, 
      password_hash, 
      is_rep,
      first_name,
      last_name,
      picture_url,
      zipcode,
      state,
      location,
      bio)
      VALUES (?,?,?,?,?,?,?,?,?,?) RETURNING *`;
    const { rows } = await knex.raw(query, [
      username,
      passwordHash,
      is_rep,
      first_name,
      last_name,
      picture_url,
      zipcode,
      state,
      location,
      bio,
    ]);
    const user = rows[0];
    return new User(user);
  }

  // this is an instance method that we can use to update
  static async update(
    id,
    username,
    first_name,
    last_name,
    picture_url,
    zipcode,
    state,
    location,
    bio
  ) {
    // dynamic queries are easier if you add more properties
    const query = `
      UPDATE users
      SET username=?
      SET first_name=?
      SET last_name=?
      SET picture_url=?
      SET zipcode=?
      SET state=?
      SET location=?
      SET bio=?
      WHERE id=?
      RETURNING *
    `;
    const { rows } = await knex.raw(query, [
      username,
      id,
      first_name,
      last_name,
      picture_url,
      zipcode,
      state,
      location,
      bio,
    ]);
    const updatedUser = rows[0];
    return updatedUser ? new User(updatedUser) : null;
  }

  static async deleteAll() {
    return knex("users").del();
  }
}

module.exports = User; 