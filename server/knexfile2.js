module.exports = {

    development: {

        migrations: { tableName: 'knex_migrations' },
        seeds: { tableName: './seeds' },

        client: 'pg',
        connection: {
            host: 'localhost',
            user: 'hapi',
            password: 'hapi123',
            database: 'hapi'
        }

    }

};