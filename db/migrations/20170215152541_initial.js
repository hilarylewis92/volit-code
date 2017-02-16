exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
        table.increments('id').primary()
        table.string('name')
        table.string('email')
        table.string('phone_number')
    }),
    knex.schema.createTable('organizations', function(table) {
        table.increments('id').primary()
        table.string('name')
        table.integer('admin_id')
             .references('id')
             .inTable('users')
    })
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTable('organizations'),
      knex.schema.dropTable('users')

    ])

}
