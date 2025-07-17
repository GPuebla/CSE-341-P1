const express = require('express');
const router = express.Router();
const user = require('../controllers/userController');

router.get('/:id', user.getSingle);

router.get('/', user.getAll);

router.post('/', user.createUser);

router.put('/:id', user.updateUser);

router.delete('/:id', user.deleteUser);


module.exports = router;