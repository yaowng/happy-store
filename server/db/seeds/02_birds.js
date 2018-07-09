
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('birds').del()
    .then(function () {
      // Inserts seed entries
      return knex('birds').insert([
        {owner: 'g04aca6c-b001-3346-bcd7-120b7e87998e', species: 'Picidae', name: 'Woodpecker', picture_url: 'http://pngimg.com/download/27826', guid: 'a01aba1c-b001-3001-bca1-120b7e87998e', isPublic: true, created_at: 'NOW()'},
        {owner: 'g04aca6c-b001-3346-bcd7-120b7e87998e', species: 'Falco', name: 'Falcon', picture_url: 'http://pngimg.com/download/27827', guid: 'a02aba2c-b002-3002-bca2-120b7e87998e', isPublic: false, created_at: 'NOW()'},
      ]);
    });
};
