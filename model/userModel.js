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

async function getUserProfileById(req, res) {
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

async function getCCUserList(req, res) {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .query('SELECT * FROM CC_ADMIN');
        return result.recordset;
    } catch (error) {
        throw error;
    }
}

async function CCLoginStatus(req, res) {
    const { email,password } = req.body;
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('email', email)
            .input('password',password)
            .query('SELECT * FROM CC_ADMIN WHERE EMAIL = @email AND PASSWORD=@password');
        return result.recordset[0];
    } catch (error) {
        throw error
    }
}

module.exports = { getAllUsers, getUserById, getUserProfileById, getCCUserList, CCLoginStatus };
