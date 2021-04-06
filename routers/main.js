/**
 * Created by admin on 2018/3/24.
 */
var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.send('MAIN - User');
});



module.exports = router;
