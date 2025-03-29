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

async function getUserById(req, id) {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.UniqueIdentifier, id)
            .query('SELECT * FROM LOGIN_DETAILS WHERE id = @id');
        return result.recordset[0];
    } catch (err) {
        throw err;
    }
}

async function getUserProfroileById(req, res) {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.UniqueIdentifier, req.id)
            .query('SELECT * FROM LOGIN_DETAILS WHERE id = @req.id');
        return result.recordset[0];
    } catch (err) {
        throw err;
    }
}
module.exports = { getAllUsers, getUserById, getUserProfroileById };
