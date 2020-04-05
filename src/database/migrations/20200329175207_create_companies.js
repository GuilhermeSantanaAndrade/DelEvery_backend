exports.up = function (knex) {
  return knex.schema.createTable("companies", (table) => {
    table.increments();
    table.timestamps();
    table.string("name").notNullable();
    table.string("description").notNullable();
    table.string("phone");
    table.string("main_image").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("companies");
};
