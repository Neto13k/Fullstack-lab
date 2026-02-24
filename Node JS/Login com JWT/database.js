const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Accounts_DB',
    password: 'Flamengo',
    port: 5432
});

module.exports = pool;