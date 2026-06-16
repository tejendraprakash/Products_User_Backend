const express = require("express");
const router = express.Router();
const userHandler = require('../handlers/user.handler');

router.post('/users', userHandler.createUser);
router.get('/users', userHandler.getAllUsers);
router.get('/users/:id', userHandler.getUserById);
router.put('/users/:id', userHandler.updateUser);
router.delete('/users/:id', userHandler.deleteUser);

module.exports = router;