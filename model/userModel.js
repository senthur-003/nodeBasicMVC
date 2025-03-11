const poolPromise = require('../db');

async function getAllUsers(req, res) {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .query('SELECT * FROM LOGIN_DETAILS');
        return result.recordset;
    } catch (error) {
        return error;
    }
}

module.exports = { getAllUsers };
