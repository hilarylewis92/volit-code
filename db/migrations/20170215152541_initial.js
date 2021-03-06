exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
        table.increments('id').primary()
        table.string('name')
        table.string('picture')
        table.string('email').unique()
        table.string('phone_number')
    }),
    knex.schema.createTable('organizations', function(table) {
        table.increments('id').primary()
        table.string('name').unique()
        table.integer('admin_id')
             .references('id')
             .inTable('users')
    }),
    knex.schema.createTable('events', function(table) {
      table.increments('id').primary()
      table.string('event_name')
      table.date('event_date')
      table.text('event_description')
      table.string('event_address')
      table.string('url_key').unique()
      table.integer('volunteer_count')
      table.integer('organization_id')
           .references('id')
           .inTable('organizations')
    }),
    knex.schema.createTable('roles', function(table) {
      table.increments('id').primary()
      table.string('role_name')
      table.integer('role_qty')
      table.integer('event_id')
           .references('id')
           .inTable('events')
    })
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('roles'),
    knex.schema.dropTable('events'),
    knex.schema.dropTable('organizations'),
    knex.schema.dropTable('users')
    ])

}
