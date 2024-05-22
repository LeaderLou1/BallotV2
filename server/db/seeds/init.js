const User = require("../models/User");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await knex("followers").del();
  await knex("posts").del();
  await knex("users").del();

  await knex.raw("ALTER SEQUENCE users_id_seq RESTART WITH 1");
  await knex.raw("ALTER SEQUENCE posts_id_seq RESTART WITH 1");
  await knex.raw("ALTER SEQUENCE followers_id_seq RESTART WITH 1");

  await User.create(
    "cool_cat",
    "1234",
    true,
    "Cool",
    "Cat",
    "11203",
    "Read More about me..",
    "Brooklyn",
    "New York",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  );
  await User.create(
    "l33t-guy",
    "1234",
    false,
    "Leet",
    "Guy",
    "11225",
    "Catch me on Counter Strike",
    "Brooklyn",
    "New York",
    "https://static.wikia.nocookie.net/cso/images/2/2d/Leet_s.png/revision/latest?cb=20140812035058"
  );
  await User.create(
    "wowow",
    "1234",
    true,
    "Wow",
    "Wow",
    "11203",
    "Wow I'm outside",
    "Brooklyn",
    "New York",
    "https://www.billboard.com/wp-content/uploads/media/Jay-Rock-Wow-Freestyle-Kendrick-Lamar-vid-2018-billboard-1548.jpg"
  );

  await knex("posts").insert([
    { user_id: 1, heading: "LOOK", content: "hello" },
    { user_id: 3, heading: "LOOK", content: "bye" },
    { user_id: 1, heading: "LOOK", content: "hellobye" },
  ]);

  await knex("followers").insert([
    { follower_user_id: 1, followed_user_id: 2 },
    { follower_user_id: 2, followed_user_id: 1 },
    { follower_user_id: 3, followed_user_id: 1 },
  ]);
};
