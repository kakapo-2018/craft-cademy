
exports.up = function (knex, Promise) {
  return knex.schema.createTable('beer', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('type')
    table.string('quality')
    table.string('image')
    table.string('lng')
    table.string('lat')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('beer')
};
