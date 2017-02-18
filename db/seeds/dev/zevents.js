exports.seed = function(knex, Promise) {
  return knex('events').del()
    .then(function () {
      return Promise.all([
        knex('events').insert({
          id: 1,
          event_name: "Ice Cream Social",
          event_date: '2017-08-15',
          volunteer_count: 15,
          organization_id: 1
        }),
        knex('events').insert({
          id: 2,
          event_name: "Foam Party",
          event_date: '2017-07-23',
          volunteer_count: 5,
          organization_id: 2
        })
      ])
    })
}
