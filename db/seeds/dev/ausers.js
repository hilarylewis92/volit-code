exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({
          id: 10,
          name: "Meeka",
          email: 'test@gmail.com',
          phone_number: '555-555-5555',
          picture: '<div className="user-avatar"><div>'
        })
      ])
    })
}
