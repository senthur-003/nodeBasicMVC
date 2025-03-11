const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const sql = require('mssql');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
require('dotenv').config();


// const db = {
//     server: process.env.DB_SERVER,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//     port: Number(process.env.DB_PORT),
//     options: {
//         encrypt: true,
//         trustServerCertificate: true,
//         enableArithAbort: true,
//     }
// }
Port = 3000;



// const poolPromise = new sql.ConnectionPool(db)
//     .connect()
//     .then(pool => {
//         console.log('Database Connected successfully');
//         return pool;
//     })
//     .catch(err => console.log('Connection refused due to :', err));
const poolPromise = require('./db');

const userRoutes = require('./routes/userRoute');
app.use('/users', userRoutes);

app.get('/user', async (req, res) => {
    try {
        const pool = await poolPromise;
        const users = await pool.request()
            .query(`select * from LOGIN_DETAILS`);
        res.status(201).send({ message: 'user details got successfully' });
    }
    catch (err) {
        res.status(500).send({ message: 'Error Creating item', error: err.message });
    }
});


app.listen(Port, () => {
    console.log(`Server is running in port : ${Port}`);
});