exports.up = function (knex) {
  return knex.schema.createTable("sales", (table) => {
    table.increments();
    table.timestamps();
    table.string("sale_number").notNullable();
    table.datetime("purchaseDateTime").notNullable();
    table.decimal("subtotal_value").defaultTo(0).notNullable();
    table.decimal("deliveryFee").defaultTo(0).notNullable();
    table.decimal("total_value").defaultTo(0).notNullable();
    table.string("customer_obs");
    table.integer("id_company").notNullable();
    table.integer("id_customer").notNullable();
    table.integer("id_address").notNullable();

    table.foreign("id_company").references("id").inTable("companies");
    table.foreign("id_customer").references("id").inTable("customers");
    table.foreign("id_address").references("id").inTable("addresses");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("sales");
};
