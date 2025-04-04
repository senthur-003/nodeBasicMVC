const express = require('express');
const router = express.Router();
const { getUsers,viewUser,viewUserDetail,getCCUser, CCLogin,CCAdmMenu } = require('../controller/userController');

router.get('/userlist', getUsers);
router.get('/userlist/:id',viewUser);
router.post('/userDetails',viewUserDetail);
router.get('/CCuserlist',getCCUser);
router.post('/CCLogin',CCLogin);
router.get('/CCadminmenu',CCAdmMenu);


module.exports = router;