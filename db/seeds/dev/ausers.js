exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({
          id: 10,
          name: "Meeka",
          email: 'haha@gmail.com',
          phone_number: '3439944857'
        })
      ])
    })
}
