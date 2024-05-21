const knex = require("../knex");

class Post {
  static async create(user_id, content) {
    const query = `INSERT INTO posts (
            user_id,
            content
        )
        VALUES(?,?) RETURNING *`;
    const { rows } = await knex.raw(query, [user_id, content]);
    const post = rows[0];
    return post;
  }

  static async findByUserId(user_id) {
    const query = `
            SELECT * FROM posts WHERE user_id = ?
        `;
    const result = await knex.raw(query, [user_id]);
    return result.rows;
  }

  static async getAllPosts() {
    const query = ` SELECT * FROM posts JOIN users ON posts.user_id = users.id`;
    const result = await knex.raw(query, []);
    return result.rows;
  }

  static async delete(post_id) {
    const query = `DELETE * FROM posts WHERE id = ?`;
    const result = await knex.raw(query, [post_id]);
    return result;
  }

  // static async getPostofFollowed(user_id) {
  //   const query = `SELECT * FROM posts JOIN followers ON posts.user_id = follower_user_id`;
  // }
}

module.exports = Post;
