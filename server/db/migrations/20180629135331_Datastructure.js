
exports.up = function (knex, Promise) {
  return knex.schema
    .createTable('users', function (table) {
      // Primary Key
      table.increments();

      // Data
      table.string('name', 50).notNullable();
      table.string('username', 50).notNullable().unique();
      table.string('email', 250).notNullable().unique();
      table.string('password', 128).notNullable();
      table.string('guid', 50).notNullable().unique();

      table.timestamp('created_at').notNullable();
    })
    .createTable('birds', function (birdsTable) {

      // Primary Key
      birdsTable.increments();
      birdsTable.string('owner', 36).references('guid').inTable('users');

      // Data
      // Each chainable method creates a column of the given type with the chained constraints. For example, in the line below, we create a column named `name` which has a maximum length of 250 characters, is of type string (VARCHAR) and is not nullable. 
      birdsTable.string('name', 250).notNullable();
      birdsTable.string('species', 250).notNullable();
      birdsTable.string('picture_url', 250).notNullable();
      birdsTable.string('guid', 36).notNullable().unique();
      birdsTable.boolean('isPublic').notNullable().defaultTo(true);

      birdsTable.timestamp('created_at').notNullable();

    });
};

exports.down = function (knex, Promise) {
  // We use `...ifExists` because we're not sure if the table's there. Honestly, this is just a safety measure. 
  return knex
    .schema
    .dropTableIfExists('birds')
    .dropTableIfExists('users');
};
