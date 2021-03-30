const router = require('express').Router();
const userContoller = require('../controllers/UserController');

router.get('/user/all', userContoller.getAllUsers);
router.get('/user/search', userContoller.getUserByName);
router.get('/user/:userId', userContoller.getUserById);
router.post('/user/update', userContoller.updateUserProfile);

module.exports = router;
