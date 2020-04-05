exports.up = function (knex) {
  return knex.schema.createTable("products", (table) => {
    table.increments();
    table.timestamps();
    table.string("name").notNullable();
    table.string("description");
    table.string("external_description");
    table.decimal("price").notNullable();
    table.integer("tipo").notNullable();
    table.decimal("peso");
    table.decimal("altura");
    table.decimal("largura");
    table.string("mainImage");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("products");
};
