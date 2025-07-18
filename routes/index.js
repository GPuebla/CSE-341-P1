const express = require('express');
const router = express.Router();

router.use('/',require('./swagger'));

router.get('/',(req,res)=>
    //#swagger.tags=['Hello World']
    res.send('Hello World')
);

const user = require('./user');

router.use('/users', user);


module.exports = router;