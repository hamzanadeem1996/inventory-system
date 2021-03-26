const router = require('express').Router();
const userContoller = require('../controllers/UserController');

router.get('/user/all', userContoller.getAllUsers);

module.exports = router;