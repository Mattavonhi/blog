/**
 * Created by admin on 2018/3/24.
 */
var express = require('express');
var router = express.Router();

router.get('/user',function(req,res,next){
    res.send('API - User');
});



module.exports = router;
