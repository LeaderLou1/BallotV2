const knex = require("../knex");

class Post {

  static async create(user_id, content) {
    const query = `INSERT INTO posts (
            user_id,
            content,
        )
        VALUES(?,?) RETURNING *`;
    const { rows } = await knex.raw(query, [
      user_id,
      content,
    ]);
    const post = rows[0];
    return new Post(post)
  }

  static async findByUserId(user_id) {
    const query = `
            SELECT * FROM posts WHERE user_id = ?
        `;
    const result = await knex.raw(query, [user_id])
    return result.rows;
  }

  static async delete(id) {
    const query = `DELETE * FROM posts WHERE id = ?`;
    const result = await knex.raw(query, [id])
    return result
  }

}

module.exports = Post;
