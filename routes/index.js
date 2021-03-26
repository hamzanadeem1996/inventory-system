const router = require('express').Router();
const userController = require('../controllers/UserController');

router.get('/user/all', userController.getAllUsers);

module.exports = router;