const db = require('./db');

async function findUserByEmail(email) {
  const result = await db.query(
    'SELECT id, name, email FROM users WHERE email = $1',
    [email]
  );

  return result.rows[0];
}

module.exports = { findUserByEmail };