/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable("users", (table) => {
    table.increments();
    table.string("username").notNullable().unique();
    table.string("password_hash").notNullable();
    table.boolean("is_rep").notNullable();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("zipcode").notNullable();
    table.string("bio").notNullable();
    table.string("location").notNullable();
    table.string("state").notNullable();
    table.string("picture_url").notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable("users");
