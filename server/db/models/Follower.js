const knex = require("../knex");

class Follower {
  static async followUser(follower_user_id, followed_user_id) {
    const query = `
      INSERT INTO followers(follower_user_id, followed_user_id)
      SELECT ?, ?
      WHERE NOT EXISTS (
        SELECT 1 FROM followers
        WHERE follower_user_id = ? AND followed_user_id = ?
      )`;

    const result = await knex.raw(query, [
      follower_user_id,
      followed_user_id,
      follower_user_id,
      followed_user_id
    ]);

    return result.rowCount > 0;
  }

  static async unfollowUser(follower_user_id, followed_user_id) {
    const query = `
      DELETE FROM followers
      WHERE follower_user_id = ? AND followed_user_id = ?`;

    const result = await knex.raw(query, [follower_user_id, followed_user_id]);
    return result.rowCount > 0;
  }

  static async getFollowers(followed_user_id) {
    const query = `SELECT * FROM followers WHERE followed_user_id = ?`;

    const followers = await knex.raw(query, [followed_user_id]);
    return followers.rows;
  }

  static async getFollowed(follower_user_id) {
    const query = `SELECT * FROM followers WHERE follower_user_id = ?`;

    const followed = await knex.raw(query, [follower_user_id]);
    return followed.rows;
  }
}

module.exports = Follower;
