const Follow = require("../models/Follower");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await knex("followers").del();

  await knex.raw("ALTER SEQUENCE followers_id_seq RESTART WITH 1");

  await Follow.create({
    user_id: 1,
    followed_user_id: 2,
    username: "l33t-guy",
  });

  await Follow.create({
    user_id: 2,
    followed_user_id: 3,
    username: "wowow",
  });
};
