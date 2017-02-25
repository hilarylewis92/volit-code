exports.seed = function(knex, Promise) {
  return knex('organizations').del()
    .then(function () {
      return Promise.all([
        knex('organizations').insert({
          id: 100,
          name: "Richard Spencer Punching Fund",
          admin_id: 10
        })
      ])
    })
}
