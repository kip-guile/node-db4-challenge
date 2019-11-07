
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('mix').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('mix').insert([
        {recipe_id: '1', ingredient_id: '3', quantity: '400'},
        {recipe_id: '2', ingredient_id: '2', quantity: '500'},
        {recipe_id: '3', ingredient_id: '1', quantity: '100'},
        {recipe_id: '3', ingredient_id: '3', quantity: '350'}
      ]);
    });
};
