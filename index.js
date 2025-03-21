const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors());

require('dotenv').config();

Port = 3000;
const poolPromise = require('./db');

const userRoutes = require('./routes/userRoute');
app.use('/users', userRoutes);

app.get('/user', async (req, res) => {
    try {
        const pool = await poolPromise;
        const users = await pool.request()
            .query(`select * from LOGIN_DETAILS`);
        res.status(200).send({ message: 'user details got successfully' });
    }
    catch (err) {
        res.status(500).send({ message: 'Error Creating item', error: err.message });
    }
});

app.listen(Port, () => {
    console.log(`Server is running in port : ${Port}`);
});