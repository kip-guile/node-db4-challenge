
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'wand'},
        {ingredient_name: 'spell'},
        {ingredient_name: 'potion'}
      ]);
    });
};
