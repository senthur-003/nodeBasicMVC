const { getAllUsers } = require('../model/userModel');

async function getUsers(req, res) {
    try {
        const users = await getAllUsers();
        console.log(users.length);
        if (users.length>0) {
            res.status(200).send({ message: 'User details fetched successfully', users });
        }
        else {
            res.status(400).send({ message: 'User details Not Found' });
        }
    } catch (err) {
        res.status(500).send({ message: 'Error fetching user details', error: err.message });
    }
}

module.exports = { getUsers };