const { getAllUsers, getUserById } = require('../model/userModel');

async function getUsers(req, res) {
    try {
        const users = await getAllUsers();
        if (users.length > 0) {
            res.status(200).send({ message: 'User details fetched successfully', users });
        }
        else {
            res.status(400).send({ message: 'User details Not Found' });
        }
    } catch (err) {
        res.status(500).send({ message: 'Error fetching user details', error: err.message });
    }
}

async function viewUser(req, res) {

    try {
        const id = req.params.id;
        const user = await getUserById(req, id);
        if (user) {
            res.status(200).send({ message: 'User details fetched successfully', user });
        } else {
            res.status(404).send("user not found");
        }

    } catch (err) {
        res.status(500).send("Error fetching user.");
    }
}


module.exports = { getUsers, viewUser };