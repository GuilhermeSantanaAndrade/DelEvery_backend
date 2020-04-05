exports.up = function (knex) {
  return knex.schema.createTable("sales_itens", (table) => {
    table.increments();
    table.timestamps(true, true);
    table.string("guid").notNullable();
    table.decimal("quantity").notNullable();
    table.integer("price").notNullable();
    table.integer("discount").defaultTo(0);
    table.decimal("deliveryFee").notNullable();
    table.decimal("total_value").notNullable();
    table.string("customer_obs");

    table.integer("id_sale").notNullable();
    table.integer("id_product").notNullable();
    table.foreign("id_sale").references("id").inTable("sales");
    table.foreign("id_product").references("id").inTable("products");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("sales_itens");
};
