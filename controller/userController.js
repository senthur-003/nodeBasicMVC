const { getAllUsers, getUserById, getUserProfroileById } = require('../model/userModel');

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

async function viewUserDetail(req, res) {
    try {
        const Id = req.id;
        const result = await getUserProfroileById(req, res);
        if (result) {
            res.status(200).send({ message: 'User details fetched successfully', result });
        } else {
            res.status(404).send("user not found");
        }
    } catch (error) {

    }
}

module.exports = { getUsers, viewUser, viewUserDetail };