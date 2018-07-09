
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'Pikachu', username: 'pika100', password: 'password', email: 'pika@email.com', guid: 'g04aca6c-b001-3346-bcd7-120b7e87998e', created_at: 'NOW()'},
        {name: 'Artemis', username: 'art3m1s', password: 'password', email: 'art3@email.com', guid: 'g05aca7c-b002-3347-bcd8-121b7e87998e', created_at: 'NOW()'}
      ]);
    });
};
