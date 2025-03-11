const { getAllUsers } = require('../model/userModel');

async function getUsers(req, res) {
    try {
        const users = await getAllUsers();
        res.status(200).send({ message: 'User details fetched successfully', users });
    } catch (err) {
        res.status(500).send({ message: 'Error fetching user details', error: err.message });
    }
}

module.exports = { getUsers };