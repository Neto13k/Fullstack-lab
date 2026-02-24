const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Alunos_db',
    password: 'Flamengo',
    port: 5432
});

module.exports = pool;