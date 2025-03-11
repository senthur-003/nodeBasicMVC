const sql = require('mssql'); 
require('dotenv').config();

const dbConfig = {
    server: process.env.DB_SERVER,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: Number(process.env.DB_PORT),
    options: {
        encrypt: true,
        trustServerCertificate: true,
        enableArithAbort: true,
    }
};

const poolPromise = new sql.ConnectionPool(dbConfig)
    .connect()
    .then(pool => {
        console.log('Database Connected successfully');
        return pool;
    })
    .catch(err => {
        console.error('Database Connection Failed! Error: ', err);
        throw err;
    });

module.exports = poolPromise;