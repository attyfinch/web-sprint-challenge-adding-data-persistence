exports.seed = async function(knex) {
    await knex('projects').truncate()
    await knex('projects').insert([   
      { project_name: 'APIpalooza', project_description: 'Write the best apis ever', project_completed: false},
      { project_name: 'Middlewaremageddon', project_description: 'Write some rad middleware'},
      { project_name: 'Sprint 14', project_description: 'Finish Sprint 14 of the full stack web program', project_completed: true},
      { project_name: 'Just a project name'}
    ]);
  };