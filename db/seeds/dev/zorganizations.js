exports.seed = function(knex, Promise) {
  return knex('organizations').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('organizations').insert({id: 1, name: "Richard Spencer Punching Fund", admin_id: 1}),
        knex('organizations').insert({id: 2, name: "Tom Cruise Fundraiser", admin_id: 2})
      ]);
    });
};
