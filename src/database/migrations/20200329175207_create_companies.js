exports.up = function (knex) {
  return knex.schema.createTable("companies", (table) => {
    table.increments();
    table.timestamps(true, true);
    table.string("guid").notNullable();
    table.string("name").notNullable();
    table.string("description").notNullable();
    table.string("phone");
    table.string("main_image").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("companies");
};
