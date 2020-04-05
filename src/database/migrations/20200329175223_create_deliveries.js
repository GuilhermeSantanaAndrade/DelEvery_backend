exports.up = function (knex) {
  return knex.schema.createTable("deliveries", (table) => {
    table.increments();
    table.timestamps(true, true);
    table.string("guid").notNullable();
    table.integer("status").notNullable();
    table.datetime("estimate_dateTime").notNullable();
    table.datetime("delivered_dateTime");
    table.decimal("tip_value").defaultTo(0);
    table.decimal("feedback_rate_stars");
    table.string("feedback_rate_text");
    table.boolean("feedback_delayed");
    table.integer("id_employee").notNullable();

    table.foreign("id_employee").references("id").inTable("employees");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("deliveries");
};
