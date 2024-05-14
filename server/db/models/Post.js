const knex = require("../knex");

class Post {
  constructor({ id, user_id, content, created_at }) {
    this.id = id;
    this.user_id = user_id;
    this.content = content;
    this.created_at = created_at;
  }

  static async create(user_id, content) {
    try {
      const [post] = await knex("posts")
        .insert({
          user_id,
          content,
        })
        .returning("*");
      return new Post(post);
    } catch (error) {
      throw error;
    }
  }

  static async findByUserId(user_id) {
    try {
      const posts = await knex("posts").where({
        user_id,
      });
      return posts.map((post) => new Post(post));
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      await knex("posts")
        .where({
          id,
        })
        .del();
    } catch (error) {
      throw error;
    }
  }

  static async deleteAllPostsForUser(user_id) {
    try {
      await knex("posts")
        .where({
          user_id,
        })
        .del();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Post;
