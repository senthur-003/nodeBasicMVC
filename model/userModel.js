const poolPromise = require('../db');

async function getAllUsers() {
    const pool = await poolPromise;
    const result = await pool.request()
        .query('SELECT * FROM LOGIN_DETAILS');
    return result.recordset;
}

module.exports = { getAllUsers };
