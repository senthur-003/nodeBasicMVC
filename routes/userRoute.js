const express = require('express');
const router = express.Router();
const { getUsers,viewUser,viewUserDetail } = require('../controller/userController');

router.get('/userlist', getUsers);
router.get('/userlist/:id',viewUser);
router.post('/userDetails',viewUserDetail);

module.exports = router;