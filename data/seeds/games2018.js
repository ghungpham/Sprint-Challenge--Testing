
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {title: 'Super Smash Bros', genre: 'fighting', releaseYear: '2018' },
        {title: 'Mario Party', genre: 'party', releaseYear: '2018' },
        {title: 'Overcooked', genre: 'simulation', releaseYear: '2018'}
      ]);
    });
};
