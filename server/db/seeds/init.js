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
    "LouisJager",
    "1234",
    true,
    "Louis",
    "Jager",
    "11203",
    "Relatable Representative with strong ties to the community",
    "Brooklyn",
    "New York",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  );
  await User.create(
    "ElijahHawes",
    "1234",
    true,
    "Elijah",
    "Hawes",
    "10474",
    "Community Leader and Coder",
    "Bronx",
    "New York",
    "https://static.wikia.nocookie.net/cso/images/2/2d/Leet_s.png/revision/latest?cb=20140812035058"
  );
  await User.create(
    "XhenisMalecaj",
    "1234",
    true,
    "Xhenis",
    "Malecaj",
    "10475",
    "Local Representative with Global Ties",
    "Bronx",
    "New York",
    "https://www.billboard.com/wp-content/uploads/media/Jay-Rock-Wow-Freestyle-Kendrick-Lamar-vid-2018-billboard-1548.jpg"
  );

  await knex("posts").insert([
    {
      user_id: 1,
      heading: "Community Engagement",
      content: "Join us this weekend for a community clean-up event!",
    },
    {
      user_id: 1,
      heading: "New Park Opening",
      content:
        "We are excited to announce the opening of a new park in our neighborhood.",
    },
    {
      user_id: 2,
      heading: "Coding Workshop",
      content: "Sign up for our free coding workshop happening next month.",
    },
    {
      user_id: 2,
      heading: "Volunteer Opportunity",
      content: "Looking for volunteers to help with our new tech initiative.",
    },
    {
      user_id: 3,
      heading: "Global Ties Event",
      content:
        "Attend our event to learn more about international partnerships.",
    },
    {
      user_id: 3,
      heading: "Cultural Exchange Program",
      content:
        "Join our cultural exchange program to experience different cultures.",
    },
  ]);
  await knex("followers").insert([
    { follower_user_id: 1, followed_user_id: 2 },
    { follower_user_id: 1, followed_user_id: 3 },
    { follower_user_id: 2, followed_user_id: 1 },
    { follower_user_id: 2, followed_user_id: 3 },
    { follower_user_id: 3, followed_user_id: 1 },
    { follower_user_id: 3, followed_user_id: 2 },
  ]);
};
