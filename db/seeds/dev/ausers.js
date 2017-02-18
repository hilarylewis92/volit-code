exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({
          id: 1,
          name: "Meeka",
          email: 'haha@gmail.com',
          phone_number: '3439944857'
        }),
        knex('users').insert({
          id: 2,
          name: "Brittany",
          email: 'lol@gmail.com',
          phone_number: '2295586767'
        }),
        knex('users').insert({
          id: 3, name: "Alex",
          email: 'hehe@gmail.com',
          phone_number: '5840982254'
        })
      ])
    })
}
