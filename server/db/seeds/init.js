const User = require("../models/User");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // Before you have models you can always just do `await knex('table_name').del`
  await knex("users").del();

  await knex.raw("ALTER SEQUENCE users_id_seq RESTART WITH 1");

  await User.create(
    "cool_cat",
    "1234",
    true,
    "Cool",
    "Cat",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "11203",
    "New York",
    "828 Midwood St",
    "The Coolest Cat"
  );
  await User.create(
    "l33t-guy",
    "1234",
    false,
    "Leet",
    "Guy",
    "https://static.wikia.nocookie.net/cso/images/2/2d/Leet_s.png/revision/latest?cb=20140812035058",
    "11225",
    "New York",
    "49 Crown St",
    "Catch me on Counter Strike"
  );
  await User.create(
    "wowow",
    "1234",
    true,
    "Wow",
    "Wow",
    "https://www.billboard.com/wp-content/uploads/media/Jay-Rock-Wow-Freestyle-Kendrick-Lamar-vid-2018-billboard-1548.jpg",
    "11203",
    "New York",
    "464 East 56th St",
    "Wow I'm outside"
  );
};
