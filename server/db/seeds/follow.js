const Follower = require("../models/Follower");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  return await knex("followers")
    .del()
    .then(function () {
      return knex("followers").insert([
        { id: 1, user_id: 1, followed_user_id: 3, username: "cool_cat" },
        { id: 2, user_id: 2, followed_user_id: 1, username: "l33t-guy" },
        { id: 3, user_id: 3, followed_user_id: 1, username: "wowow" },
      ]);
    });
};
