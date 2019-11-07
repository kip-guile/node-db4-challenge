
exports.up = function(knex) {
  return knex.schema
    .createTable('recipe', tbl => {
        tbl.increments()
        tbl.text('recipe_name')
            .unique()
            .notNullable()
    })
    .createTable('ingredients', tbl => {
        tbl.increments()
        tbl.text('ingredient_name')
            .unique()
            .notNullable()
    })
    .createTable('mix', tbl => {
        tbl.increments()
        tbl.integer(recipe_id)
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipe')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.integer(ingredient_id)
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.float(quantity)
            .notNullable()
    })
    .createTable('steps', tbl => {
        tbl.increments()
        tbl.integer(step_number)
            .notNullable()
        tbl.text(instructions)
            .notNullable()
        tbl.integer(recipe_id)
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipe')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('mix')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipe')
};
