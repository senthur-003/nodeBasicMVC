const { getAllUsers, getUserById, getUserProfileById, getCCUserList, CCLoginStatus, CCAdminMenu } = require('../model/userModel');

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
        const result = await getUserProfileById(req, res);
        if (result) {
            res.status(200).send({ message: 'User details fetched successfully', result });
        } else {
            res.status(404).send("user not found");
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getCCUser(req, res) {
    try {
        const result = await getCCUserList(req, res);
        if (result) {
            const sanitizedResult = result.map(user => {
                const { PASSWORD, ...safeUser } = user;
                return safeUser;
            });

            res.status(200).send({ message: 'user list', Users: sanitizedResult });
        }
        else {
            res.status(404).send('user not found');
        }

    } catch (error) {
        res.status(500).send(error);
    }
}

async function CCLogin(req, res) {
    try {
        const result = await CCLoginStatus(req, res);
        if (result) {
            const { PASSWORD, ...User } = result;
            res.status(200).send({ message: 'User details fetched successfully', User });
        } else {
            res.status(404).send("user not found");
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

async function CCAdmMenu(req, res) {
    try {
        const result = await CCAdminMenu(req, res);
        if (result) {
            res.status(200).send({ message: 'User details fetched successfully', result });
        } else {
            res.status(404).send("user not found");
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = { getUsers, viewUser, viewUserDetail, getCCUser, CCLogin, CCAdmMenu };