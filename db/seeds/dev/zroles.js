exports.seed = function(knex, Promise) {
  return knex('roles').del()
    .then(function () {
      return Promise.all([
        knex('roles').insert({
          id: 10000,
          role_name: 'Painter',
          role_qty: 12,
          event_id: 1000,
        })
      ])
    })
}
