const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator/check')

router.post('/',[
    check('name', 'Name is required').not().isEmpty(),
    check('email','please check email').isEmail(),
    check('password','6more chartacters').isLength({
        min:6
    })
], (req,res) => {
    // console.log(req.body)
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() })
    }
    const { name, email, password } = req.body;



    res.send('User route')

});


module.exports = router;