// Update with your config settings.

const dbConnnection = process.env.DATABASE_URL;

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/sprint.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/sprintTest.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },

  production: {
    client: 'pg',
    connection: dbConnnection,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};

