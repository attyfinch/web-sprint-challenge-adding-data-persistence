/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable('projects', table => {
    table.increments('project_id')
    table.string('project_name').notNullable()
    table.string('project_description', 500).defaultTo('anotehr test')
    table.boolean('project_completed').defaultTo('true')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('projects')
};
