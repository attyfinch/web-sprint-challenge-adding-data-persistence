/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable('projects', table => {
    table.increments('project_id')
    table.string('project_name').notNullable()
    table.string('project_description', 256)
    table.boolean('project_completed').defaultTo('false') // default value not appearing
  })

  await knex.schema.createTable('resources', table => {
    table.increments('resource_id')
    table.string('resource_name').notNullable().unique() // not indicating unique
    table.string('resource_description', 256)
  })

  await knex.schema.createTable('tasks', table => {
    table.increments('task_id')
    table.string('task_description').notNullable()
    table.string('task_notes')
    table.boolean('task_completed').defaultTo('false')
    table.integer('project_id')
        .notNullable()
        .unsigned()
        .references('project_id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
  })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
