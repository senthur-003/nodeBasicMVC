const express = require('express');
const router = express.Router();
const { getUsers,viewUser } = require('../controller/userController');

router.get('/userlist', getUsers);
router.get('/userlist/:id',viewUser);

module.exports = router;