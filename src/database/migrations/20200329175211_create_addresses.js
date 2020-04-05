exports.up = function (knex) {
  return knex.schema.createTable("addresses", (table) => {
    table.increments();
    table.timestamps(true, true);
    table.string("guid").notNullable();
    table.string("cep").notNullable();
    table.string("street").notNullable();
    table.string("type");
    table.string("street_number").notNullable();
    table.string("complement");
    table.string("neighborhood").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
    table.integer("latitude");
    table.integer("longitude");
    table.integer("id_customer").notNullable();

    table.foreign("id_customer").references("id").inTable("customers");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("addresses");
};
