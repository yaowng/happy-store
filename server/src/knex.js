export default require('knex')({

    client: 'pg',
    connection: {
      host: '0.0.0.0',
      database: 'hapi_db',
      user:     'hapi',
      password: 'hapi123'
    },
    // pool: {
    //   min: 2,
    //   max: 10
    // },
    // migrations: {
    //   tableName: 'knex_migrations'
    // },
    // seeds: {
    //   tableName: './seeds'
    // }

});
