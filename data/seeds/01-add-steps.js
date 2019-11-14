
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {instructions: 'point wand', step_number: '1', recipe_id: '1'},
        {instructions: 'brew potion', step_number: '1', recipe_id: '2'},
        {instructions: 'say magic words', step_number: '2', recipe_id: '1'}
      ]);
    });
};
