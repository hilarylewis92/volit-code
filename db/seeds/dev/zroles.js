exports.seed = function(knex, Promise) {
  return knex('roles').del()
    .then(function () {
      return Promise.all([
        knex('roles').insert({
          id: 1000,
          role_name: 'Painter',
          event_id: 100
        }),
        knex('roles').insert({
          id: 2000,
          role_name: 'Singer',
          event_id: 200
        })
      ])
    })
}
