const sql = require('mssql');
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

async function getUserById(req, uuid) {

    try {

        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.UniqueIdentifier, uuid)
            .query('SELECT * FROM LOGIN_DETAILS WHERE id = @id');
        return result.recordset[0];
    } catch (err) {
        throw err;
    }
}

module.exports = { getAllUsers, getUserById };
