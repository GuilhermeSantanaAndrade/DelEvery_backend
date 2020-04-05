exports.up = function (knex) {
  return knex.schema.createTable("employees", (table) => {
    table.increments();
    table.timestamps();
    table.string("name").notNullable();
    table.string("employee_type").notNullable();
    table.string("employee_subtype").notNullable();
    table.string("photo");
    table.integer("id_company").notNullable();

    table.foreign("id_company").references("id").inTable("companies");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("employees");
};
