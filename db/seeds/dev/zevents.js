exports.seed = function(knex, Promise) {
  return knex('events').del()
    .then(function () {
      return Promise.all([
        knex('events').insert({
          id: 1000,
          event_name: 'Ice Cream Social',
          event_date: '2017-08-15',
          event_description: 'Cool ice cream social to donate to a charity',
          event_address: '0987 Whats Up Ave.',
          volunteer_count: 15,
          organization_id: 100
        })
      ])
    })
}
