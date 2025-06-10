const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',       // your pgAdmin username
  host: 'localhost',
  database: 'election_db',    // your database name
  password: 'Nrcf@21', // your pgAdmin password
  port: 5432,
});

// export default pool
module.exports = pool;