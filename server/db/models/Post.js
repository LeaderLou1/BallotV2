const knex = require("../knex");

class Post {
  static async create(user_id, heading, content) {
    const query = `INSERT INTO posts (
            user_id,
            heading,
            content
        )
        VALUES(?,?,?) RETURNING *`;
    const { rows } = await knex.raw(query, [user_id, heading, content]);
    const post = rows[0];
    return post;
  }

  static async findByUserId(user_id) {
    const query = `
        SELECT posts.*, users.username,users.picture_url FROM posts JOIN users ON posts.user_id = users.id WHERE user_id = ?
    `;
    const result = await knex.raw(query, [user_id]);
    return result.rows;
  }

  static async getAllPosts() {
    const query = `SELECT posts.*, users.username,users.picture_url FROM posts JOIN users ON posts.user_id = users.id`;
    const result = await knex.raw(query, []);
    return result.rows;
  }

  static async delete(post_id) {
    const query = `DELETE FROM posts WHERE id = ?`; // Fixed DELETE query
    const result = await knex.raw(query, [post_id]);
    return result;
  }

  static async update(post_id, heading, content) {
    const query = `
      UPDATE posts
      SET heading = ?, content = ?
      WHERE id = ?
      RETURNING *`;
    const { rows } = await knex.raw(query, [heading, content, post_id]);
    return rows[0];
  }

  // static async getPostofFollowed(user_id) {
  //   const query = `SELECT * FROM posts JOIN followers ON posts.user_id = follower_user_id`;
  // }
}

module.exports = Post;
