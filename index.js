const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const cors = require('cors');
app.use(cors());

require('dotenv').config();

Port = 3000;
const poolPromise = require('./db');

const path = require('path');//is used to connect the local pages to the browser

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

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'login.html'));
});

app.listen(Port, () => {
    console.log(`Server is running in port : ${Port}`);
});
